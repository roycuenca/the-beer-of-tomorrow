import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { BeerProvider, useBeerContext } from '../src/Context/BeerContext';

describe('BeerContext', () => {
  it('should fetch and update beers on page change', async () => {
    const wrapper = ({ children }) => <BeerProvider>{children}</BeerProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useBeerContext(), {
      wrapper,
    });

    act(() => {
      result.current.fetchMoreBeers();
    });

    await waitForNextUpdate();

    expect(result.current.allBeers.length).toBeGreaterThan(0);
  });

  it('should fetch beer by ID', async () => {
    const wrapper = ({ children }) => <BeerProvider>{children}</BeerProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useBeerContext(), {
      wrapper,
    });

    const testBeerId = 2;

    act(() => {
      result.current.getBeerByIdSelected(testBeerId);
    });

    await waitForNextUpdate();

    expect(result.current.beerSelected).toBeDefined();
  });

  it('should filter beers by name', async () => {
    const wrapper = ({ children }) => <BeerProvider>{children}</BeerProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useBeerContext(), {
      wrapper,
    });

    const testBeerName = 'Buzz';

    act(() => {
      result.current.filterByBeerName(testBeerName);
    });

    await waitForNextUpdate();

    expect(result.current.allBeers.length).toBeGreaterThan(0);
  });
});
