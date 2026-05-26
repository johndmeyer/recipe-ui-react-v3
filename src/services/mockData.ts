import type { 
    DropDownItem, 
    Equipment, 
    Ingredient, 
    Recipe, 
    RecipeEquipment, 
    RecipeIngredient, 
    RecipeTag, 
    Unit
} from '../types';

export const difficulties: Array<DropDownItem> = [
    { id: 'f7d2b2d1-1b4e-4f9b-86c0-7f3feb7937d7', name: 'Easy' },
    { id: '29db4afb-2027-4a24-8c18-2aee96a6c5fd', name: 'Medium' },
    { id: '3c6fb12b-1809-4e6b-9a2f-1bd0af89bfaa', name: 'Difficult' }
];

export const cookTimes: Array<DropDownItem> = [
    { id: 'a72d8c19-ce72-4d5d-9e1a-6131e7d1e2f9', name: '15 minutes' },
    { id: 'c9e812b8-b5f2-4a0a-93e1-91b4c8e4d939', name: '30 minutes' },
    { id: '7415d247-9d8f-4d5b-95ef-1f5dc9394fb8', name: '45 minutes' },
    { id: '2e3a1f44-eaa0-42f7-ac19-2c1dfe58b883', name: '1 hour' },
    { id: '4a4b7f60-3a6e-4687-a927-c7a6d2a8a4b2', name: '1.5 hours' },
    { id: 'f2fe8d18-23ac-4c17-96d4-3c56b7d4afaa', name: '2 hours+' }
];

export const equipments: Array<Equipment> = [
    { id: '1d22c6d5-1312-4060-a48f-1e1413c6074b', name: 'Appliances', description: 'Machines used in cooking (e.g. oven, air fryer, etc...)' },
    { id: '5d0b95a0-2d29-4b95-a9e8-2b2f0cdb22cf', name: 'Food Preparation', description: 'Other items used in cooking (e.g. cutting board, spatula, etc...)' },
    { id: 'ce9a2d9e-f88e-4ac8-9e44-347a3b5c619b', name: 'Servingware', description: 'Items used to serve food once it has been prepared (e.g. plates, utensils, etc...)' },
    { id: '2d49eafe-7b6f-40a7-8736-bd912fb4f8e2', name: 'Dutch Oven', description: 'A heavy, wide, fairly shallow pot with a tight fitting lid', parentId: '5d0b95a0-2d29-4b95-a9e8-2b2f0cdb22cf' },
    { id: 'c8b2db2d-0fb3-4f2f-bf85-a3e5e5ce1b11', name: 'Burner', description: 'A heat source upon which pots, pans or other vessels can be placed', parentId: '1d22c6d5-1312-4060-a48f-1e1413c6074b' },
    { id: '9d9a2711-8a5b-4a70-9865-6f875e09b2bc', name: 'Cutting Board', description: 'A wooden or plastic board used to protect the countertop and/or assist in cleaning in food preparation', parentId: '1d22c6d5-1312-4060-a48f-1e1413c6074b' },
    { id: 'b77a9c75-30c4-4a8a-b0a9-7d2c8f486fcd', name: 'Chefs Knife', description: 'A large general utility knife used in food preparation', parentId: '5d0b95a0-2d29-4b95-a9e8-2b2f0cdb22cf' },
    { id: 'e3e8f8c1-2d02-49c8-92d7-4f6ff31e7c6e', name: 'Insta Pot', description: 'A pressure cooker with a built in burner and timer', parentId: '1d22c6d5-1312-4060-a48f-1e1413c6074b' },
    { id: '8b2fcd34-79c3-4fa8-8f39-2f6b8282b0aa', name: 'Bowl', description: 'A semi spherical dish used for serving food', parentId: 'ce9a2d9e-f88e-4ac8-9e44-347a3b5c619b' }
];

export const ingredients: Array<Ingredient> = [
    { id: '3e1f8b04-17d0-4668-8f36-2e0a982705b1', name: 'Basic', description: 'A type reserved for the most basic of ingredients (e.g. Water)' },
    { id: '9f436d79-0f54-4146-bf50-8c111d2aa29e', name: 'Herbs and Spices', description: 'Any seed, fruit, bark, or other substance in a form primarily used for flavoring or coloring food' },
    { id: '4c0a3bf7-48f7-4b90-a927-0c9f7d10b2e9', name: 'Meat', description: 'Animal tissue, often muscle, that is eaten as food' },
    { id: 'd25e1c37-9e04-4624-bc97-0cd2ba5f916b', name: 'Grain', description: 'A grass cultivated for it\'s edible grain' },
    { id: 'af0c3115-8943-49eb-9f27-1a3bb0a2b456', name: 'Fruit', description: 'The fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds' },
    { id: '74bd5f88-6b4e-4ffd-9b99-60cdd8e573e2', name: 'Vegetable', description: 'Any other part of a plant that is not fruit, such as the leaves, stems, roots, and bulbs' },
    { id: '8a1f0f5c-1f6b-47cf-9f29-7f37d3b1a4f2', name: 'Water', description: 'Perhaps the most basic ingredient', parentId: '3e1f8b04-17d0-4668-8f36-2e0a982705b1' },
    { id: '0b4f1f8d-18c0-44e6-bab1-9ca3eca6d12a', name: 'Vegetable Oil', description: 'Oil extracted from the seeds or other parts of edible plants', parentId: '3e1f8b04-17d0-4668-8f36-2e0a982705b1' },
    { id: 'aec02b6f-4ae6-4f09-b992-3c3f4bbf805c', name: 'Kosher Salt', description: 'A coarse edible salt, usually without common additives such as iodine', parentId: '9f436d79-0f54-4146-bf50-8c111d2aa29e' },
    { id: 'd2d41c64-2444-40b7-8fd7-257bfb1f6c50', name: 'Black Pepper', description: 'The dried seed of a flowering vine in the family Piperaceae', parentId: '9f436d79-0f54-4146-bf50-8c111d2aa29e' },
    { id: '1c3f4b08-3f98-4d5c-b8ba-70d4b3a9acde', name: 'Garlic', description: 'A species of bulbous flowing plant in the genus Allium', parentId: '9f436d79-0f54-4146-bf50-8c111d2aa29e' },
    { id: '02e1fd5a-b16d-4b64-9d81-b9a4dfe1c04a', name: 'Dry Garbanzo Beans', description: 'Also known as the chick pea, dried garbanzo beans are round, beige in color, and are about 1 cm in circumference', parentId: 'd25e1c37-9e04-4624-bc97-0cd2ba5f916b' },
    { id: 'c2693ef4-5775-4669-971d-e0f1d3bb00b2', name: 'Fire Roasted Green Chilies', description: 'Available fresh, frozen or canned, green chilies (e.g. Hatch) are roasted over an open flame so the skin peels off', parentId: '74bd5f88-6b4e-4ffd-9b99-60cdd8e573e2' },
    { id: '6cc3c2b7-7fbe-4599-9ddf-6a6f4ddb1b77', name: 'Long Grain Wild Rice Blend', description: 'A mix of various types of long grain rice, including a black wild rice', parentId: 'd25e1c37-9e04-4624-bc97-0cd2ba5f916b' },
    { id: '7e5b1a82-8673-4d7f-8d2d-9f0b3bc9a6fd', name: 'Chicken', description: 'A medium sized domesticated flightless bird', parentId: '4c0a3bf7-48f7-4b90-a927-0c9f7d10b2e9' }
];

export const tags: Array<DropDownItem> = [
    { id: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff', name: 'Cusine Type' },
    { id: 'c4f25079-9d6a-4a5e-a4f8-2fb4143bc6a4', name: 'Flavor Profile' },
    { id: 'f88b2d4e-5d31-4b7a-b4d0-4c0d9bc77fbb', name: 'Meal' },
    { id: '42d1c9f1-1eb2-4d6a-b6ff-5b9c79f3a8e1', name: 'American South West', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: '7d2a9b54-e9d7-4c45-8f0a-2bb39f7c8a18', name: 'Asian', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: '8e6c3d14-2a5f-4c8f-be0d-7f3b8a9c5c21', name: 'Cajun', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: '99b47a2d-0e6f-4f3a-8d9c-1b2f3e4a5c6d', name: 'BBQ', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: 'cb1a7d3f-c4e8-4d9a-9f2b-3e1a0b7c8d5f', name: 'Mexican', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: 'd4510b7f-f2c6-4a8e-b3d0-7a1c9e5f8b2d', name: 'Indian', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: 'e3b9f7a0-1c4d-4f8e-8a2b-5d6f7a3c9b0e', name: 'Italian', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: 'f6a3b5c2-7d8e-4a1f-b0c9-2e3d4a5f6b7c', name: 'French', parentId: '6b7ed3f4-fb13-4f0b-9d2a-30cf6a712aff' },
    { id: '01b9c8d7-e4f3-4a2b-9c0d-1e2f3a4b5c6d', name: 'Breakfast', parentId: 'f88b2d4e-5d31-4b7a-b4d0-4c0d9bc77fbb' },
    { id: '12c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e', name: 'Lunch', parentId: 'f88b2d4e-5d31-4b7a-b4d0-4c0d9bc77fbb' },
    { id: '23d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f', name: 'Dinner', parentId: 'f88b2d4e-5d31-4b7a-b4d0-4c0d9bc77fbb' },
    { id: '34e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a', name: 'Dessert', parentId: 'f88b2d4e-5d31-4b7a-b4d0-4c0d9bc77fbb' },
    { id: '45f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b', name: 'Snack', parentId: 'f88b2d4e-5d31-4b7a-b4d0-4c0d9bc77fbb' },
    { id: '56a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', name: 'Appetizer', parentId: 'f88b2d4e-5d31-4b7a-b4d0-4c0d9bc77fbb' },
    { id: '67b8c9d0-e1f2-4a3b-5c6d-7e8f9a0b1c2d', name: 'Sweet', parentId: 'c4f25079-9d6a-4a5e-a4f8-2fb4143bc6a4' },
    { id: '78c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e', name: 'Savory', parentId: 'c4f25079-9d6a-4a5e-a4f8-2fb4143bc6a4' },
    { id: '89d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f', name: 'Spicy', parentId: 'c4f25079-9d6a-4a5e-a4f8-2fb4143bc6a4' },
    { id: '9a0b1c2d-3e4f-4a5b-6c7d-8e9f0a1b2c3d', name: 'Salty', parentId: 'c4f25079-9d6a-4a5e-a4f8-2fb4143bc6a4' }
];

export const unitTypes: Array<DropDownItem> = [
    { id: '2a8d5651-1b4e-4d6c-8d19-7a2e1b6f5c3d', name: 'Metric' },
    { id: '9c6d3e4f-5b8a-4d7c-9e1f-0a2b3c4d5e6f', name: 'Imperial' },
    { id: '6b9a8d7c-5e4f-4d3c-2b1a-9e8f7d6c5b4a', name: 'Natural' }
];

export const units: Array<Unit> = [
    { id: '2f4b5c6d-7e8f-4a1b-9c2d-0e3f4a5b6c7d', name: 'Liter', abbreviation: 'l', unitTypeId: '2a8d5651-1b4e-4d6c-8d19-7a2e1b6f5c3d' },
    { id: '8e7f6a5b-4c3d-2e1f-0a9b-8c7d6e5f4a3b', name: 'Gram', abbreviation: 'g', unitTypeId: '2a8d5651-1b4e-4d6c-8d19-7a2e1b6f5c3d' },
    { id: '3d2c1b0a-9e8f-7d6c-5b4a-3c2d1e0f9a8b', name: 'Kilogram', abbreviation: 'kg', unitTypeId: '2a8d5651-1b4e-4d6c-8d19-7a2e1b6f5c3d' },
    { id: '4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d', name: 'Mililiter', abbreviation: 'ml', unitTypeId: '2a8d5651-1b4e-4d6c-8d19-7a2e1b6f5c3d' },
    { id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'Celsius', abbreviation: 'C', unitTypeId: '2a8d5651-1b4e-4d6c-8d19-7a2e1b6f5c3d' },
    { id: '5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f', name: 'Clove', abbreviation: 'n/a', unitTypeId: '6b9a8d7c-5e4f-4d3c-2b1a-9e8f7d6c5b4a', },
    { id: '7f6e5d4c-3b2a-1c0d-9e8f-7a6b5c4d3e2f', name: 'Head', abbreviation: 'n/a', unitTypeId: '6b9a8d7c-5e4f-4d3c-2b1a-9e8f7d6c5b4a' },
    { id: '8b7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d', name: 'Whole', abbreviation: 'n/a', unitTypeId: '6b9a8d7c-5e4f-4d3c-2b1a-9e8f7d6c5b4a' }
];

export const recipes: Recipe[] = [
    {
        recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d',
        difficulty: 'Medium',
        cookTime: '1 hour',
        description: 'A slightly spicy soup made with chicken, rice, and garbanzo beans',
        directions: 'yada yada',
        name: 'Bowl of the Wife of Kit Carson',
        photoUrl: 'https://centerofthewest.org/wp-content/uploads/2023/03/PW343_recipe-chicken-soup.jpg',
        servings: '6'
    }
];

export const recipeEquipment: RecipeEquipment[] = [
    { ...equipments.find(e => e.id === '2d49eafe-7b6f-40a7-8736-bd912fb4f8e2')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d' },
    { ...equipments.find(e => e.id === 'c8b2db2d-0fb3-4f2f-bf85-a3e5e5ce1b11')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d' },
    { ...equipments.find(e => e.id === '9d9a2711-8a5b-4a70-9865-6f875e09b2bc')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d' },
    { ...equipments.find(e => e.id === 'b77a9c75-30c4-4a8a-b0a9-7d2c8f486fcd')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d' },
    { ...equipments.find(e => e.id === '8b2fcd34-79c3-4fa8-8f39-2f6b8282b0aa')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d' },
];

export const recipeIngredients: RecipeIngredient[] = [
    { ...ingredients.find(i => i.id === '7e5b1a82-8673-4d7f-8d2d-9f0b3bc9a6fd')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d', id: '7e5b1a82-8673-4d7f-8d2d-9f0b3bc9a6fd', quantity: 1, unitId: '8b7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b4c3d' },
    { ...ingredients.find(i => i.id === 'c2693ef4-5775-4669-971d-e0f1d3bb00b2')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d', id: 'c2693ef4-5775-4669-971d-e0f1d3bb00b2', quantity: 250, unitId: '4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d' }
];

export const recipeTags: RecipeTag[] = [
    { ...tags.find(t => t.id === '42d1c9f1-1eb2-4d6a-b6ff-5b9c79f3a8e1')!, recipeId: '9c7a6c5d-4e3f-2a1b-0c9d-8e7f6a5b5c2d' }
];