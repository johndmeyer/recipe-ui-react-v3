import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    IconButton,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { Save, Add } from '@mui/icons-material';
import DropDown from './DropDown';
import { DropDownItem, RecipeDetail, RecipeEquipment, RecipeTag } from '../types';
import { readRecipeDetail } from '../services/recipe';

interface RecipeDetailCardProps {
    domain: string
    recipeId: string | undefined
}

const defaultRecipeDetail: RecipeDetail = {
    recipeId: '',
    name: '',
    description: '',
    photoUrl: '',
    servings: '',
    cookTime: '',
    difficulty: '',
    ingredients: [],
    equipments: [],
    tags: [],
    directions: '',
}

export default function RecipeDetailCard({ domain, recipeId }: RecipeDetailCardProps) {
    const [recipeDetail, setRecipeDetail] = useState<RecipeDetail | null>(defaultRecipeDetail);

    const [dropDownItemTag, setDropDownItemTag] = useState<DropDownItem>({ id: '', name: '' });

    const [dropDownItemEquipment, setDropDownItemEquipment] = useState<DropDownItem>({ id: '', name: '' });

    useEffect(() => {
      if (!recipeId) return;

      const fetchData = async () => {
          const data = await readRecipeDetail(domain, recipeId);
          setRecipeDetail(data);
      };
  
      fetchData();
    }, []);

    const handleAddEquipment = () => {
        if (!dropDownItemEquipment) return;  

        setRecipeDetail((prev) => {
            if (!prev) return prev;

            const newEquipment: RecipeEquipment = {
                description: '',
                id: dropDownItemEquipment.id,
                name: dropDownItemEquipment.name,
                recipeId: recipeDetail?.recipeId || '',
            };

            alert(JSON.stringify(newEquipment));

            return {
                ...prev,
                equipments: [...prev.equipments, newEquipment]
            }
        });

        setDropDownItemEquipment({ id: '', name: '' });
    }

    const handleAddTag = () => {
        if (!dropDownItemTag) return;  

        setRecipeDetail((prev) => {
            if (!prev) return prev;

            const newTag: RecipeTag = {
                id: dropDownItemTag.id,
                name: dropDownItemTag.name,
                recipeId: recipeDetail?.recipeId || '',
            };

            alert(JSON.stringify(newTag));

            return {
                ...prev,
                tags: [...prev.tags, newTag]
            }
        });

        setDropDownItemTag({ id: '', name: '' });
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
            title='Add/Edit Recipe'
          />
          <CardContent>
            <Stack direction='column' spacing={2}>
                <TextField
                    hiddenLabel={!!recipeDetail?.name}
                    label={`Recipe Name`}
                    sx={{ m: 2 }}
                    value={recipeDetail?.name || ''}
                    variant='outlined'
                />
                <TextField
                    hiddenLabel={!!recipeDetail?.photoUrl}
                    label={`Recipe Photo Url`}
                    sx={{ m: 2 }}
                    value={recipeDetail?.photoUrl || ''}
                    variant='outlined'
                />
                <TextField
                    hiddenLabel={!!recipeDetail?.description}
                    label={`Recipe Description`}
                    multiline
                    sx={{ m: 2 }}
                    value={recipeDetail?.description || ''}
                    variant='outlined'
                />
                <Stack direction='row' spacing={2}>
                    <DropDown 
                        domain={domain} 
                        path='difficulty'
                    />
                    <DropDown 
                        domain={domain} 
                        path='duration'
                    />
                    <TextField
                        hiddenLabel={!!recipeDetail?.servings}
                        label={`Servings`}
                        sx={{ m: 2 }}
                        value={recipeDetail?.servings || ''}
                        variant='outlined'
                    />
                </Stack>
                <Box
                    sx={{ border: '1px solid black', borderRadius: 1, p: 2 }}
                >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                        Ingredients:
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <TextField
                            variant='outlined'
                            label={`#`}
                            sx={{ m: 2 }}
                        />
                        <DropDown domain={domain} path='unit'/>
                        <DropDown domain={domain} path='ingredient'/>
                        <Button 
                            aria-label='add ingredient' 
                            sx={{ m: 2 }}
                            variant='outlined'
                        >
                            <Add />
                        </Button>
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                        {
                            recipeDetail?.ingredients.map((ingredient, index) => (
                                <Typography key={index} variant="body1">
                                    {`* ${ingredient.quantity} ${ingredient.unitId} ${ingredient.name}`}
                                </Typography>
                            ))
                        }
                    </Box>
                </Box>
                <Box
                    sx={{ border: '1px solid black', borderRadius: 1, p: 2 }}
                >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                        Equipment:
                    </Typography>
                    <Stack direction='row' spacing={2} sx={{ justifyContent: 'flex-end' }}>
                        <DropDown domain={domain} path='equipment' sx={{ width: '100%' }}/>
                        <Button 
                            aria-label='add ingredient'
                            onClick={handleAddEquipment}
                            sx={{ m: 2 }}
                            variant='outlined'
                        >
                            <Add />
                        </Button>
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                        {
                            recipeDetail?.equipments.map((equipment, index) => (
                                <Typography key={index} variant="body1">
                                    {`* ${equipment.name}`}
                                </Typography>
                            ))
                        }
                    </Box>
                </Box>
                <Box
                    sx={{ border: '1px solid black', borderRadius: 1, p: 2 }}
                >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                        Tags:
                    </Typography>
                    <Stack 
                        direction='row' 
                        spacing={2} 
                        sx={{ justifyContent: 'flex-end' }}
                    >
                        <DropDown 
                            domain={domain}
                            path='tag'
                            setDropDownItem={setDropDownItemTag}
                            sx={{ width: '100%' }}
                        />
                        <Button 
                            aria-label='add tag'
                            onClick={handleAddTag}
                            sx={{ m: 2 }}
                            variant='outlined'
                        >
                            <Add />
                        </Button>
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                        {
                            recipeDetail?.tags.map((tag, index) => (
                                <Typography key={index} variant="body1">
                                    {`* ${tag.name}`}
                                </Typography>
                            ))
                        }
                    </Box>
                </Box>
                <TextField
                    hiddenLabel={!!recipeDetail?.directions}
                    label={`Directions`}
                    multiline
                    sx={{ m: 2 }}
                    value={recipeDetail?.directions || ''}
                    variant='outlined'
                />
            </Stack>
            <CardActions disableSpacing>
              <IconButton aria-label="save" sx={{ marginLeft: 'auto' }}>
                <Save />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
    )
}