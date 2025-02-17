import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchDoctors from "./components/SearchDoctors";
import TopDoctors from './components/TopDoctors';
import WhyChooseDoctovi from "./components/WhyChooseDoctovi";
import Footer from './components/Footer';
import NavTab from "./components/NavTab";




import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Open Sans", "Lato", "Montserrat", "Nunito"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HeroSection />
      <SearchDoctors />
      <TopDoctors />
      <WhyChooseDoctovi />
      <Footer />
      <NavTab/>

    </ThemeProvider>

    
  );
}

export default App;
