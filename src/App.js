import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import './Assets/Global.css';

import ROUTES_NAME from "./constants/routes";
import Footer from "./components/Footer/Footer";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const PropertiesPage = lazy(() => import("./pages/propertiesPages/PropertiesPage"));
const AboutPage = lazy(() => import("./pages/aboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/contactPage/ContactPage"));
const LoginPage = lazy(() => import("./pages/loginPage/LoginPage"));
const PropertyProfile = lazy(() => import("./pages/propertiesPages/PropertyProfile"));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES_NAME.HOME} element={<HomePage />} />
            <Route path={ROUTES_NAME.PROPERTIES} element={<PropertiesPage />} />
            <Route path={ROUTES_NAME.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES_NAME.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES_NAME.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES_NAME.VIEW_PROPERTY} element={<PropertyProfile />} />
            <Route path={ROUTES_NAME.VIEW_PROJECT} element={<PropertiesPage />} />
            <Route path={ROUTES_NAME.VIEW_BROKER} element={<PropertiesPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
