import { create } from "zustand";

export const useAppStore = create((set) => ({
    loadItem : 12,
    setLoadItem : () => set((state) => ({loadItem : state.loadItem + 15})),

    dataKategori : [],
    setDataKategori : () => set((state) => ({dataKategori : state})),
}));