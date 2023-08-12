// apiFunctions.ts
import { Beer } from '../../types';
import axiosInstance from './apiConfig';

export const getAllBeers = async (page: number): Promise<Beer[]> => {
  try {
    const response = await axiosInstance.get(`/beers?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBeerById = async (id: string): Promise<Beer[]> => {
  try {
    const response = await axiosInstance.get(`/beers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBeerByName = async (beerName: string): Promise<Beer[]> => {
  try {
    const response = await axiosInstance.get(`/beers?beer_name=${beerName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBeerByFoodPairing = async (food: string): Promise<Beer[]> => {
  try {
    const response = await axiosInstance.get(`/beers?food=${food}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
