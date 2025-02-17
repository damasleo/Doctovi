import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import doctorImage from "../assets/doctor.png";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "40px 20px" : "60px 100px",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        textAlign: isMobile ? "center" : "left",
        width: "100%",
        boxSizing: "border-box",
        top: "50px",
        margin: isMobile ? "0 auto" : "0", 
      }}
    >
      {/* Cercle en arrière-plan (Retiré sur mobile) */}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            width: "400px",
            height: "400px",
            backgroundColor: "#BBE1FA",
            borderRadius: "50%",
            top: "10%",
            right: "10%",
            zIndex: 0,
          }}
        />
      )}

      {/* Texte */}
      <Box
        sx={{
          flex: 1,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "600px",
          width: "100%", // Assure que la boîte de texte occupe toute la largeur sur mobile
          margin: isMobile ? "0 auto" : "0",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "black",
            fontWeight: "bold",
            marginBottom: "15px",
            fontSize: isMobile ? "24px" : "36px",
          }}
        >
          Des soins de qualité à portée de main
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "black",
            opacity: 0.8,
            marginBottom: "25px",
            fontSize: isMobile ? "14px" : "16px",
          }}
        >
          Consultez des médecins qualifiés, planifiez vos rendez-vous en ligne et accédez à des informations médicales fiables en quelques clics. Votre bien-être, notre engagement.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: "15px",
            marginBottom: "20px",
            width: "100%", // Assure que les boutons occupent toute la largeur sur mobile
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2D9CDB",
              borderRadius: "20px",
              padding: "8px 20px",
              textTransform: "none",
              fontSize: "16px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            Prendre Rendez-vous
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#2D9CDB",
              color: "black",
              borderRadius: "20px",
              padding: "8px 20px",
              textTransform: "none",
              fontSize: "16px",
              width: isMobile ? "100%" : "auto",
              "&:hover": { backgroundColor: "#2D9CDB", borderColor: "#6A9C89", color: "white" },
            }}
          >
            Consultez nos offres
          </Button>
        </Box>
      </Box>

      {/* Image (Retirée sur mobile) */}
      {!isMobile && (
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", zIndex: 1 }}>
          <img
            src={doctorImage}
            alt="Doctor"
            style={{ width: "400px", borderRadius: "10px", mixBlendMode: "darken", marginLeft: "68px" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;