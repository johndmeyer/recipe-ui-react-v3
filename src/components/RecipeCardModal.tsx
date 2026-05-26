import RecipeCardDetail from "./RecipeCardDetail";
import RecipeCardEdit from "./RecipeCardEdit";

interface RecipeCardModalProps {
    domain: string,
    editMode: boolean,
    recipeId: string | undefined,
    setRecipeCardModalEdit: (mode: boolean) => void,
}

export default function RecipeCardModal({domain, editMode, recipeId, setRecipeCardModalEdit}: RecipeCardModalProps) {
    return editMode
        ? <RecipeCardEdit domain={domain} recipeId={recipeId} /> 
        : <RecipeCardDetail domain={domain} recipeId={recipeId} setRecipeCardModalEdit={setRecipeCardModalEdit}/>
}