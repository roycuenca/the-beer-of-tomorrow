import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Beer } from '../../types';
import {
  getAllBeers,
  getBeerByFoodPairing,
  getBeerById,
  getBeerByName,
} from '../api/services';
import { transformText } from '../utils/helpers/Helpers';

interface BeerContextType {
  allBeers: Beer[];
  beerSelected: Beer | null;
  fetchMoreBeers: () => void;
  filterByBeerName: (beerName: string) => void;
  getBeerByIdSelected: (id: string) => void;
  filterByBeerFoodPairing: (food: string) => void;
  isLoading: boolean;
}

const BeerContext = createContext<BeerContextType | undefined>(undefined);

export const useBeerContext = () => {
  const context = useContext(BeerContext);
  if (!context) {
    throw new Error('useBeerContext must be used within a BeerProvider');
  }
  return context;
};

interface BeerContextValue {
  children: ReactNode;
}

export const BeerProvider: React.FC<BeerContextValue> = ({ children }) => {
  const [allBeers, setAllBeers] = useState<Beer[]>([]);
  const [beerSelected, setBeerSelected] = useState<Beer | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAllBeers();
  }, [page]);

  const fetchAllBeers = async () => {
    try {
      setIsLoading(true);
      const response = await getAllBeers(page);
      setAllBeers((prevBeers) => [...prevBeers, ...response]);
    } catch (error) {
      console.error('Error fetching beers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getBeerByIdSelected = async (id: string) => {
    setIsLoading(true);
    setBeerSelected(null);
    try {
      const response = await getBeerById(id);
      setBeerSelected(response[0]);
    } catch (error) {
      console.error('Error fetching beers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByBeerName = async (beerName: string) => {
    try {
      setAllBeers([]);
      setIsLoading(true);

      if (!beerName) {
        setPage(1);
        await fetchAllBeers();
      } else {
        const response = await getBeerByName(beerName);
        setAllBeers(response);
      }
    } catch (error) {
      console.error('Error fetching beers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByBeerFoodPairing = async (food: string) => {
    try {
      setAllBeers([]);
      setIsLoading(true);

      if (!food) {
        setPage(1);
        await fetchAllBeers();
      } else {
        const formatString = transformText(food);
        const response = await getBeerByFoodPairing(formatString);
        setAllBeers(response);
      }
    } catch (error) {
      console.error('Error fetching beers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreBeers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const contextValue: BeerContextType = {
    allBeers,
    beerSelected,
    fetchMoreBeers,
    filterByBeerName,
    getBeerByIdSelected,
    filterByBeerFoodPairing,
    isLoading,
  };

  return (
    <BeerContext.Provider value={contextValue}>{children}</BeerContext.Provider>
  );
};
