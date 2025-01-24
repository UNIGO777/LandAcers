import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import PropertiesPage from "./pages/propertiesPages/PropertiesPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import LoginPage from "./pages/loginPage/LoginPage";
import './Assets/Global.css'
import AdminDashboard from './admin/Dashboard'
import PropertyProfile from './pages/propertiesPages/PropertyProfile'


import ROUTES_NAME from "./constants/routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={ROUTES_NAME.HOME} element={<HomePage />} />
          <Route path={ROUTES_NAME.PROPERTIES} element={<PropertiesPage />} />
          <Route path={ROUTES_NAME.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES_NAME.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES_NAME.ADMIN} element={< AdminDashboard/>} />
          <Route path={ROUTES_NAME.VIEW_PROPERTY} element={< PropertyProfile/>} />
          
          

        </Routes>
        <Footer />
        

        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
