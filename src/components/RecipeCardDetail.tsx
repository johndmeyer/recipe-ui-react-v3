import { useEffect, useState } from 'react';
import { 
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  CardMedia, 
  Grid, 
  IconButton,
  Typography 
} from '@mui/material';
import { Edit, Favorite, Share } from '@mui/icons-material';
import { RecipeDetail } from '../types';
import { readRecipeDetail } from '../services/recipe';

interface RecipeDetailCardProps {
    domain: string
    recipeId: string | undefined
    setRecipeCardModalEdit: (edit: boolean) => void
}

export default function RecipeDetailCard({ domain, recipeId, setRecipeCardModalEdit }: RecipeDetailCardProps) {
    const [recipeDetail, setRecipeDetail] = useState<RecipeDetail | null>(null);

    useEffect(() => {
      if (!recipeId) return;

      const fetchData = async () => {
          const data = await readRecipeDetail(domain, recipeId);
          setRecipeDetail(data);
      };
  
      fetchData();
    }, []);

    const handleEditClick = () => {
      setRecipeCardModalEdit(true);
    }

    return (
        <Card
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 24,
            left: '50%',
            maxHeight: '80vh',
            overflowY: 'auto',
            p: 4,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
          }}
        >
          <CardHeader
            title={recipeDetail?.name || 'Recipe Detail'}
          />
          <CardMedia
            component="img"
            image={recipeDetail?.photoUrl}
            alt={recipeDetail?.name}
          />
          <CardContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {recipeDetail?.description}
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={6}>
                <Typography variant="h6">Ingredients:</Typography>
                {recipeDetail?.ingredients.map((ingredient, index) => (
                  <Typography key={index} variant="body1">
                    {ingredient.name}
                  </Typography>
                ))}
              </Grid>
              <Grid size={6}>
                <Typography variant="h6">Equipment:</Typography>
                {recipeDetail?.equipments.map((equipment, index) => (
                  <Typography key={index} variant="body1">
                    {equipment.name}
                  </Typography>
                  ))}
                </Grid>
            </Grid>
            <Typography variant="body1">
              {recipeDetail?.directions}
            </Typography>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <IconButton 
                aria-label="edit" 
                sx={{ marginLeft: 'auto' }}  
                onClick={handleEditClick}
              >
                <Edit />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
    )
}