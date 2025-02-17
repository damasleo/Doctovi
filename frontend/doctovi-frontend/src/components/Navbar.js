import React, { useState, useEffect } from "react";
import { 
  AppBar, Toolbar, Typography, Button, Box, 
  Drawer, List, ListItem, ListItemText, IconButton, 
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };


  return (
    <>
      {/* Navbar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: scrolling ? "#2D9CDB" : "#FFFF",
          transition: "0.4s ease-in-out",
          boxShadow: scrolling ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
          padding: "8px 40px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isMobile ? (
            <>
              {/* Menu Hamburger */}
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: scrolling ? "#FFF" : "#2D9CDB", fontSize: "29px" }} />
              </IconButton>

              {/* Logo au centre */}
              <Typography 
                variant="h4" 
                sx={{ 
                  color: scrolling ? "#FFF" : "#2D9CDB", 
                  fontWeight: "bold", 
                  flexGrow: 1, 
                  textAlign: "center" 
                }}
              >
                Doctovi
              </Typography>

              {/* Icône de recherche */}
              <IconButton onClick={() => setSearchOpen(!searchOpen)}>
                <SearchIcon sx={{ color: scrolling ? "#FFF" : "#2D9CDB", fontSize: "29px" }} />
              </IconButton>
            </>
          ) : (
            <>
              {/* Logo */}
              <Typography variant="h4" sx={{ color: scrolling ? "#FFF" : "#2D9CDB", fontWeight: "bold" }}>
                Doctovi
              </Typography>

              {/* Menu Desktop */}
              <Box sx={{ display: "flex", gap: "10px" }}>
                {["Accueil", "Articles", "Centre d'aide", "À propos"].map((text, index) => (
                  <Button 
                    key={index} 
                    sx={{ 
                      color: scrolling ? "#FFF" : "black", 
                      textTransform: "none", 
                      fontSize: "17px", 
                      paddingX: "20px" 
                    }}
                  >
                    {text}
                  </Button>
                ))}
              </Box>

              {/* Bouton Connexion/Inscription */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: scrolling ? "#FFF" : "#2D9CDB",
                  color: scrolling ? "black" : "#FFF",
                  borderRadius: "20px",
                  padding: "10px 25px",
                  fontSize: "16px",
                  textTransform: "none",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: scrolling ? "#e0e0e0" : "#1b7dc7"
                  }
                }}
              >
                S’inscrire
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar pour Mobile avec animation */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { width: 250, transition: "transform 0.3s ease-in-out" } }}
      >
        <List>
          <ListItem sx={{ justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </ListItem>
          {["Accueil", "Articles", "Centre d'aide", "À propos"].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      
    </>
  );
};

export default Navbar;
