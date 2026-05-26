import { CardMedia, Stack, Typography } from '@mui/material';

export default function InfoRow({ label, items }: { label: string, items: Array<string> }) {
  return (
    <Stack direction='row' sx={{ alignItems: 'center', gap: 2, justifyContent: 'center' }}>
        <Typography variant='h5'>
            {label}
        </Typography>
        {
            items.map((item, index) => {
                return (
                    <CardMedia
                        component='img'
                        image={item}
                        sx={{ 
                            maxHeight: '75px',
                            maxWidth: '125px', 
                            objectFit: 'contain' 
                        }}
                    />
                )
            })
        }
      </Stack>
  );
}