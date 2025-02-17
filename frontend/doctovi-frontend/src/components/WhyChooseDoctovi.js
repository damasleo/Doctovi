import { Box, Typography, Button } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices"; // Icône pour consultations
import MessageIcon from "@mui/icons-material/Message"; // Icône pour téléconsultation
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BannerImage from '../assets/banner.png';


const WhyChooseDoctovi = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFF",
        padding: "60px 20px",
        textAlign: "center",
        borderRadius: "10px",
        marginTop: "50px",
      }}
    >
      {/* Titre */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "primary", marginBottom: "20px" }}
      >
        Pourquoi choisir <span style={{ color: "#2D9CDB" }}>Doctovi</span> ?
      </Typography>

      {/* Sous-Titre */}
      <Typography variant="h6" sx={{ color: "secondary", marginBottom: "30px" }}>
        Doctovi rend l'accès aux soins médicaux plus simple, rapide et efficace !
      </Typography>

      {/* Section des services principaux */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "50px",
          flexWrap: "wrap",
          margin: "30px",
        }}
      >
        {/* Service 1 */}
        <Box sx={{ textAlign: "center", maxWidth: "350px" }}>
          <MedicalServicesIcon sx={{ fontSize: 60, color: "#2D9CDB" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "10px" }}>
            Accédez aux soins plus facilement
          </Typography>
          <Typography variant="body2" sx={{ color: "secondary" }}>
            Réservez des consultations vidéo ou en présentiel, et recevez des rappels pour ne jamais les manquer.
          </Typography>
        </Box>

        {/* Service 2 */}
        <Box sx={{ textAlign: "center", maxWidth: "350px" }}>
          <MessageIcon sx={{ fontSize: 60, color: "#2D9CDB" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "10px" }}>
            Bénéficiez de soins personnalisés
          </Typography>
          <Typography variant="body2" sx={{ color: "secondary" }}>
            Échangez avec vos soignants par message, obtenez des conseils préventifs et recevez des soins quand vous en avez besoin.
          </Typography>
        </Box>

        {/* Service 3 */}
        <Box sx={{ textAlign: "center", maxWidth: "350px" }}>
          <MonitorHeartIcon sx={{ fontSize: 60, color: "#2D9CDB" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "10px" }}>
            Gérez votre santé
          </Typography>
          <Typography variant="body2" sx={{ color: "secondary" }}>
            Rassemblez facilement toutes vos informations de santé et celles de ceux qui comptent pour vous.
          </Typography>
        </Box>
      </Box>

      {/* Bannière CTA */}
      <Box
        sx={{
          marginTop: "50px",
          backgroundColor: "#56CCF2",
          padding: "40px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: "left",
          height: "210px",
        }}
      >
        {/* Texte et bouton à gauche */}
        <Box sx={{ maxWidth: "500px", color: "primary" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Trouvez des médecins 100% qualifiés et soignez-vous avec Doctovi
          </Typography>
          <Button
            variant="contained"
            sx={{
                backgroundColor: '#56CCF2', 
                color: 'black', 
                border: '1px solid black',
                padding: '10px 20px',
                borderRadius: '20px',
                textTransform: 'none',
                fontSize: '16px',
                font: "bold",
            }}
            >
            Commencer
          </Button>
        </Box>

        {/* Image à droite */}
        <Box sx={{ maxWidth: "300px" }}>
          <img
            src= {BannerImage}
            alt="Médecin Doctovi"
            style={{ width: "100%", marginTop: '-50px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseDoctovi;
