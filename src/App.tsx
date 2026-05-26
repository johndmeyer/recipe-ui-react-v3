import { Box, Button, Stack, Modal, Typography, CardMedia } from '@mui/material';
import InfoRow from './components/InfoRow';
import RefItemEditor from './components/RefItemEditor';
import ResultsTable from './components/ResultsTable';
import RecipeCardModal from './components/RecipeCardModal';
import logoReact from './assets/logo-react.png';
import logoMui from './assets/logo-mui.png';
import logoDocker from './assets/logo-docker.png';
import logoAwsFargate from './assets/logo-aws-fargate.png';
import logoAwsEcs from './assets/logo-amazon-ecs.png';
import { useState } from 'react';

function App() {
  const domain = '';

  const [selectedRecipeId, setSelectedRecipeId] = useState<string | undefined>(undefined);
  const [showRecipeDetailEdit, setShowRecipeDetailEdit] = useState(false);
  const [recipeCardModalEdit, setRecipeCardModalEdit] = useState<boolean>(true);

  const handleRecipeCardModalClose = () => {
    setShowRecipeDetailEdit(false);
    setSelectedRecipeId(undefined);
    setRecipeCardModalEdit(false);
  }

  return (
    <>
      <Box>
        <Typography 
          variant='h1'
          sx={{textAlign: 'center'}}
        >
          ..-RECIPE-..
        </Typography>

        <InfoRow label='Built With:' items={[logoReact, logoMui]} />
        <InfoRow label='Hosted on/using:' items={[logoDocker, logoAwsEcs, logoAwsFargate]} />

        <Box sx={{ m: 4 }}>
          <ResultsTable 
            domain={domain} 
            setSelectedRecipeId={setSelectedRecipeId} 
            setShowRecipeDetailEdit={setShowRecipeDetailEdit} 
          />
        </Box>

        <Stack direction='row' sx={{ alignItems: 'center', gap: 2, justifyContent: 'center' }}>
          <Button 
            onClick={() => {
              setRecipeCardModalEdit(true);
              setSelectedRecipeId(undefined);
              setShowRecipeDetailEdit(true);
            }}
            variant='outlined'
            sx={{ m: 1, minWidth: 200 }}
          >
            Add Recipe
          </Button>
          <RefItemEditor domain={domain} path='equipment' />
          <RefItemEditor domain={domain} path='ingredient' />
          <RefItemEditor domain={domain} path='tag' />
        </Stack>
      </Box>
      <Modal
        open={showRecipeDetailEdit}
        onClose={handleRecipeCardModalClose}
      >
        <RecipeCardModal 
          domain={domain} 
          editMode={recipeCardModalEdit} 
          recipeId={selectedRecipeId} 
          setRecipeCardModalEdit={setRecipeCardModalEdit} 
        />
      </Modal>
    </>
  );
}

export default App;
