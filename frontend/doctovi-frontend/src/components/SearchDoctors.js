import React from 'react';
import { Box, Typography, TextField, Grid, Button, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchDoctors = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 4, marginTop: "20px"}}>
      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Vous ne vous sentez pas bien ?
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ mb: 4, color: 'text.primary' }}>
        Prenez rendez-vous avec des médecins expérimentés pour vos besoins de santé.
      </Typography>

      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 4,
      }}
    >
      {/* Search Input */}
    <TextField
    variant="outlined"
    placeholder="Rechercher par nom de médecin, spécialité ou emplacement"
    sx={{
        width: '50%',
        '& .MuiOutlinedInput-root': {
        borderRadius: '25px 0 0 25px',
        borderRight: 'none',
        borderColor: '#2D9CDB',
        '&:hover': {
            borderColor: '#2D9CDB',
        },
        '&.Mui-focused': {
            borderColor: '#2D9CDB', 
        },
        },
        '& .MuiOutlinedInput-input': {
        padding: '12px 20px',
        },
    }}
    />

    <Button
    variant="contained"
    startIcon={<SearchIcon />}
    sx={{
        borderRadius: '0 25px 25px 0',
        height: '48px',
        padding: '0 24px',
        backgroundColor: '#2D9CDB',
        '&:hover': { backgroundColor: '#238ACB' }, 
    }}
    >
    </Button>

    </Box>

      {/* Specialties */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
            Spécialités populaires
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {['Cardiologie', 'Dermatologie', 'Neurologie', 'Pédiatrie', 'Orthopédie', 'Dentisterie'].map((specialty) => (
            <Grid item key={specialty}>
              <Chip label={specialty} variant="outlined" clickable />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SearchDoctors;