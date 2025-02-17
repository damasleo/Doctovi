import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import doctorImage from '../assets/doctor.png';
import EmilyDavis from '../assets/Emily.png';
import JaneSmith from '../assets/Jane.png';
import MichaelBrown from '../assets/Michael.png'


const topDoctors = [
    {
      name: 'Dr. John Doe',
      specialty: 'Cardiologue',
      image: doctorImage,
      available: true,

    },
    {
      name: 'Dr. Jane Smith',
      specialty: 'Dermatologue',
      available: true, 
      image: JaneSmith,

    },

    {
        name: 'Dr. Emily Davis',
        specialty: 'Chirurgien orthopédiste',
        image: EmilyDavis,
        available: true, 
  
      },
    {
      name: 'Dr. Michael Brown',
      specialty: 'Pédiatre',
      image: MichaelBrown,
      available: true, 

    },
    
  ];


  const TopDoctors = () => {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
          Docteurs populaires
        </Typography>
  
        {/* Doctors Grid */}
        <Grid container spacing={4} justifyContent="center">
          {topDoctors.map((doctor, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}  lg={3}>
              <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 2 }}>
               {/* Doctor Image with Background Color */}
                <Box sx={{ backgroundColor: '#BBE1FA', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={doctor.image}
                    alt={doctor.name}
                    sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    
                />
                </Box>
  
                {/* Doctor Details */}
                <CardContent>
                     {/* Availability Badge */}
                  {doctor.available && (
                    <Chip
                      label="Available"
                      size="small"
                      sx={{
                        backgroundColor: '#4caf50', // Green color
                        color: '#fff', // White text
                        fontWeight: 'bold',
                      }}
                    />
                  )}
                  <Typography gutterBottom variant="h6" component="div" sx={{}}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.specialty}
                  </Typography>
                </CardContent>
  
                {/* Book Appointment Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <Button variant="contained" size="" 
                  sx={{
                    background: "#2D9CDB",
                    fontSize: "12px"
                  }}>
                    Prendre rendez-vous
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default TopDoctors;