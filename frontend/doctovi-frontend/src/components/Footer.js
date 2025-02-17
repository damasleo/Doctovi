import { Box, Typography, Button, Link, Menu, MenuItem, Checkbox, ListItemText, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import flagRCA from "../assets/Flag_RCA.svg"; 



const Footer = () => {
     // État pour le menu des langues
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState("Français"); // Langue par défaut

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    // Gestion du changement de langue
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        handleClose();
    };
  return (
    <Box
      sx={{
        backgroundColor: "#FFFF",
        color: "primary",
      }}
    >
      {/* Ligne supérieure : Logo + Copyright + Bouton */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        {/* Logo + Copyright */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#2D9CDB", marginRight: "10px" }}
          >
            Doctovi
          </Typography>
          <Typography variant="body2">© 2025 Doctovi. Tous droits réservés.</Typography>
        </Box>

        {/* Bouton Centre d'Aide */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2D9CDB",
            color: "white",
            textTransform: "none",
            borderRadius: "20px",
            "&:hover": { backgroundColor: "#1A7CB6" }, // Couleur au survol corrigée
          }}
        >
          Consulter le centre d'aide
        </Button>
      </Box>

      {/* Section des colonnes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 colonnes égales
          gap: "40px",
          marginTop: "30px",
          padding: "10px 40px",
        }}
      >
        {/* Colonne 1 - Notre entreprise */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Notre entreprise
          </Typography>
          <Link href="#" color="inherit" underline="none" >
            À propos
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Notre mission
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Contact
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Besoin d'aide ?
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Nos partenaires
          </Link>
        </Box>

        {/* Colonne 2 - Trouver des spécialistes */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Trouver des spécialistes
          </Typography>
          <Link href="#" color="inherit" underline="none">
            Médecins généralistes
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Dentistes
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Cardiologues
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Pédiatres
          </Link>
        </Box>

        {/* Colonne 3 - Liens rapides */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Liens rapides
          </Typography>
          <Link href="#" color="inherit" underline="none">
            Prendre un rendez-vous
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Assistance
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Blog santé
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Confidentialité
          </Link>
        </Box>

        {/* Colonne 4 - Recherches fréquentes */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Recherches fréquentes
          </Typography>
          <Link href="#" color="inherit" underline="none">
            Symptômes de grippe
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Meilleurs hôpitaux
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Vaccins disponibles
          </Link>
          <br />
          <Link href="#" color="inherit" underline="none">
            Consultations en ligne
          </Link>
        </Box>
      </Box>

    {/* Ligne inférieure : Langue + Réseaux sociaux */}
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          marginTop: "30px",
          borderTop: "1px solid #ddd",
        }}
      >
       {/* Sélecteur de pays et de langue */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Sélecteur de pays */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" sx={{ fontSize: "17px", fontWeight: "bold", margin: "8px" }}>
          Pays:
        </Typography>
        <img 
          src={flagRCA} 
          alt="Drapeau de la RCA"
          style={{ width: "30px", height: "20px", borderRadius: "2px", objectFit: "cover" }}
        />
        <Typography variant="body1" sx={{ fontSize: "17px", marginLeft: "8px" }}>
          RCA
        </Typography>
      </Box>

        {/* Sélecteur de langue */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ fontSize: "17px", fontWeight: "bold" }}>
         Langue : 
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "17px", marginLeft: "4px" }}>
        {selectedLanguage}
        </Typography>

        <IconButton onClick={handleClick} sx={{ color: "black" }}>
        <ArrowDropDown />
        </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {["Français", "Sango", "Anglais", "Swahili"].map((lang) => (
                <MenuItem key={lang} onClick={() => handleLanguageChange(lang)}>
                <Checkbox checked={selectedLanguage === lang} />
                <ListItemText primary={lang} />
                </MenuItem>
            ))}
            </Menu>
        </Box>
        </Box>

        {/* Icônes des réseaux sociaux */}
        <Box>
          <IconButton href="#" sx={{ color: "#3b5998" }}>
            <Facebook />
          </IconButton>
          <IconButton href="#" sx={{ color: "#1DA1F2" }}>
            <Twitter />
          </IconButton>
          <IconButton href="#" sx={{ color: "#0A66C2" }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="#" sx={{ color: "#E4405F" }}>
            <Instagram />
          </IconButton>
        </Box>
      </Box>
      </Box>
  );
};

export default Footer;
