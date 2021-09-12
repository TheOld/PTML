import create from 'zustand';
import pipe from 'ramda/es/pipe';
import { devtools } from 'zustand/middleware';

import { fetchExclusionList, fetchMatchingParts } from '../api';

// Simple logger
const log = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log('  applying', args);
      set(args);
      console.log('  new state', get());
    },
    get,
    api,
  );

// Here we pipe the log, devtools and create into a single object
const createStore = pipe(log, devtools, create);

const useStore = createStore((set) => ({
  isExcluded: false,
  exclusions: [],
  fetchExclusions: async () => {
    const response = await fetchExclusionList();
    set({ exclusions: response });
  },
  parts: [],
  fetchParts: async () => {
    const response = await fetchMatchingParts();
    set({ parts: response });
  },
}));

export default useStore;
