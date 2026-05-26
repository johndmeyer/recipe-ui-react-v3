export interface DropDownItem {
    id: string
    name: string
    parentId?: string
}

export interface Tag extends DropDownItem {}

export interface UnitType extends DropDownItem {}

export interface Unit extends DropDownItem  {
    unitTypeId: string;
    abbreviation: string;
}

export interface Equipment extends DropDownItem {
    description: string;
}

export interface Ingredient extends DropDownItem  {
    id: string;
    name: string;
    description: string;
    parentId?: string;
}

export interface Recipe {
    recipeId: string
    difficulty: string
    cookTime: string
    description: string
    directions: string
    name: string
    photoUrl: string
    servings: string
}

export interface RecipeDetail extends Recipe {
    ingredients: Array<RecipeIngredient>
    equipments: Array<RecipeEquipment>
    tags: Array<RecipeTag>
}

export interface RecipeEquipment extends Equipment {
    recipeId: string;
}

export interface RecipeIngredient extends Ingredient {
    recipeId: string;
    quantity: number;
    unitId: string;
}

export interface RecipeTag extends Tag {
    recipeId: string;
}