import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Precio from './components/Precios';
import Footer from './components/Footer';
import Ubicacion from './components/Ubicacion';
import Contacto from './components/Contacto';
import SobreNosotros from './components/SobreNosotros';
import Grilla from './components/Grilla';
import ScrollToTop from './components/ScrollToTop';
import Login from './components/Auth/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/Protected/ProtectedRoute'; 

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Header authenticated={authenticated} />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Precio />
            <Ubicacion />
            <Footer />
          </>
        } />
        <Route path="/contacto" element={
          <>
            <Contacto />
            <Footer />
          </>
        } />
        <Route path="/sobre-nosotros" element={
          <>
            <SobreNosotros />
            <Footer />
          </>
        } />
        <Route path="/grilla" element={
          <>
            <Grilla />
            <Footer />
          </>
        } />
        <Route path="/inicio-sesion" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/admin/*" element={
          <ProtectedRoute authenticated={authenticated}>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
