import create from 'zustand';

const useStore = create((set) => ({
  designations: [],
  allEmployee: [],
  allLocationEmployee: [],
  selectedRow: [], // New state for selected rows
  setDesignations: (data) => set({ designations: data }),
  setAllEmployee: (data) => set({ allEmployee: data }),
  setAllLocationEmployee: (data) => set({ allLocationEmployee: data }),
  setSelectedRow: (data) => set({ selectedRow: data }), // New setter for selected rows
}));

export default useStore;
