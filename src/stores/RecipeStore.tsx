import { create } from 'zustand';
import { BaseStore } from './BaseStore';
import type { Recipe } from '../types';
import { readRecipes } from '../services/recipe';

export type RecipeStore = BaseStore<Recipe[], undefined>;

export const useRecipeStore = create<RecipeStore>((set) => ({
    data: undefined,
    error: undefined, 
    isLoading: false,
    fetchData: async () => { 
        set({ isLoading: true, error: undefined });
        try {
            const response = await readRecipes();
            // TODO: handle response errors
            set({ data: response, error: undefined, isLoading: false });
        } catch (error) {
            set({ error: error as Error, isLoading: false });
        }
    },
    clearError: () => set({ error: undefined }),
    reset: () => set({ data: undefined, error: undefined, isLoading: false }),
})); 