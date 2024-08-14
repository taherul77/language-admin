// store.js or store.ts
import create from 'zustand';

const useStore = create((set) => ({
  designations: [],
  allEmployee: [],
  allLocationEmployee: [],
  setDesignations: (data) => set({ designations: data }),
  setAllEmployee: (data) => set({ allEmployee: data }),
  setAllLocationEmployee: (data) => set({ allLocationEmployee: data }),

}));

export default useStore;
