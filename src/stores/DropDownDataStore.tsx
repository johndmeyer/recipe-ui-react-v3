import { create } from 'zustand';
import { BaseStore } from './BaseStore';
import type { DropDownItem } from '../types'; 
import { readDropDownData } from '../services/recipe';

export type DropDownDataStore = BaseStore<DropDownItem[], undefined> & {
    fetchData: (path: string) => Promise<void>;
};

export const useDropDownDataStore = create<DropDownDataStore>((set) => ({
    data: undefined,
    error: undefined, 
    isLoading: false, 
    fetchData: async (path) => { 
        set({ isLoading: true, error: undefined });
        try {
            const response = await readDropDownData(path);
            // TODO: handle response errors
            set({ data: response, error: undefined, isLoading: false });
        } catch (error) {
            set({ error: error as Error, isLoading: false });
        }
    },
    clearError: () => set({ error: undefined }),
    reset: () => set({ data: undefined, error: undefined, isLoading: false }),
})); 