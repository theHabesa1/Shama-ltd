import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import { Link } from 'react-router-dom';

// Dummy client data with images for demonstration
const clients = [
  {
    id: 1,
    name: 'Wild Coffee',
    imageUrl: 'https://ik.imagekit.io/n0rrhn2df/WILD%20COFFEE.jpg?updatedAt=1695199884878',
  },
  {
    id: 2,
    name: 'Weg',
    imageUrl: 'https://ik.imagekit.io/n0rrhn2df/WEG.jpg?updatedAt=1695200314755',
  },
  {
    id: 3,
    name: 'Tiru Kito',
    imageUrl: 'https://ik.imagekit.io/n0rrhn2df/TIRU%20KITFO.jpg?updatedAt=1695199863380',
  },
  {
    id: 4,
    name: 'Lanouvele',
    imageUrl: 'https://ik.imagekit.io/n0rrhn2df/LANOUVELE.jpg?updatedAt=1695199851903',
  },
  {
    id: 5,
    name: 'Grub On',
    imageUrl: 'https://ik.imagekit.io/n0rrhn2df/GRUB%20ON.jpg?updatedAt=1695199838171',
  },
  {
    id: 6,
    name: 'Gize ',
    imageUrl: 'https://ik.imagekit.io/n0rrhn2df/GIZE.jpg?updatedAt=1695199792974',
  },
  {
    id: 7,
    name: 'Babis',
    imageUrl: 'https://ik.imagekit.io/n0rrhn2df/BABIS.jpg?updatedAt=1695199819581',
  },
  // Add more client data as needed
];

const GetInTouch = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        mx: 6,
      }}
    >
      <Title text={'Our Clients  '} textAlign={'center'} />
      <Paragraph
        text={'Here are some of the clients we work with . '}
        maxWidth={'sm'}
        mx={0}
        textAlign={'center'}
      />

      {/* Button to "get in touch" (unchanged) */}
     

      {/* Grid of client cards */}
      <Grid container spacing={3} justifyContent="center">
        {clients.map((client) => (
          <Grid item xs={12} sm={6} md={4} key={client.id}>
            {/* Individual client card */}
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '16px',
                textAlign: 'center',
                backgroundColor: '#fff',
              }}
            >
              {/* Client image */}
              <img
                src={client.imageUrl}
                alt={client.name}
                style={{
                  width: '100%', // Adjust image size as needed
                  height: 'auto',
                  marginBottom: '10px',
                }}
              />
              <Typography variant="h6">{client.name}</Typography>
              <p>{client.description}</p>
            </div>
          </Grid>
        ))}
      </Grid>

      <Button
        component={Link}
        to={'/contact'}
        variant="contained"
        size="medium"
        sx={{
          fontSize: '0.9rem',
          textTransform: 'capitalize',
          py: 2,
          px: 4,
          mt: 3,
          mb: 2,
          borderRadius: 0,
          backgroundColor: '#14192d',
          '&:hover': {
            backgroundColor: '#1e2a5a',
          },
        }}
      >
        get in touch
      </Button>
    </Stack>
  );
};

export default GetInTouch;
