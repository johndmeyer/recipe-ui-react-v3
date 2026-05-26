import { DropDownItem, Recipe, RecipeDetail } from '../types';
import { 
    tags, 
    difficulties, 
    cookTimes, 
    recipes, 
    ingredients, 
    equipments, 
    recipeTags, 
    recipeEquipment, 
    recipeIngredients,
    units
} from './mockData';

export const readRecipes = async (domain: string): Promise<Array<Recipe>> => {
    // const results: Array<recipe> = [];

    // try {
    //     const response = await fetch(`${domain}/recipe`);
    //     return await response.json() || [];
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }

    // return results;
    return recipes;
}

export const readRecipeDetail = async (domain: string, recipeId: string): Promise<RecipeDetail> => {
    // const results: Array<Recipe> = [];

    // try {
    //     const response = await fetch(`${domain}/recipe/${recipeId}`);
    //     return await response.json() || [];
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }

    // return results;
    const recipeDetail: RecipeDetail = {
        ...recipes.find(r => r.recipeId === recipeId) || recipes[0],
        ingredients: recipeIngredients.filter(ri => ri.recipeId === recipeId),
        equipments: recipeEquipment.filter(re => re.recipeId === recipeId),
        tags: recipeTags.filter(rt => rt.recipeId === recipeId)
    }

    return recipeDetail;
}

export const readDropDownData = async (domain: string, path: string): Promise<Array<DropDownItem>> => {
    // const results: Array<DropDownItem> = [];

    // try {
    //     const response = await fetch(`${domain}/${path}`);
    //     return await response.json() || [];
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }

    // return results;

    // TODO: Add try/catch and error handling when the actual api calls are implemented
    switch(path) {
        
        case 'difficulty':
            return difficulties;
        case 'duration':
            return cookTimes;
        case 'equipment':
            return equipments;
        case 'ingredient':
            return ingredients;
        case 'tag':
            return tags;
        case 'unit':
            return units;
        default:
            return [];
    }
}