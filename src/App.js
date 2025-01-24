import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import PropertiesPage from "./pages/propertiesPage/PropertiesPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import LoginPage from "./pages/loginPage/LoginPage";
import './Assets/Global.css'

import ROUTES_NAME from "./constants/routes";
import Footer from "./components/Footer/Footer";
import AdminDashboard from "./components/admin/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();

  const restrictedPaths = [
    "/admin/dashboard",
    "/admin/users",
    "/admin/brokers",
    "/admin/properties",
    "/admin/queries",
    "/admin/payments",
    "/admin/settings",
  ];
 
  const isRestrictedRoute = restrictedPaths.includes(
    location.pathname.toLowerCase()
  );
  const isAdminRoute = location.pathname.startsWith("/admin"); // Check if current route is an admin route
  
  return (
    <>
      {isAdminRoute ? (
        // Render Admin layout with sidebar and dashboard for admin routes
        <AdminDashboard />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path={ROUTES_NAME.HOME} element={<HomePage />} />
            <Route path={ROUTES_NAME.PROPERTIES} element={<PropertiesPage />} />
            <Route path={ROUTES_NAME.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES_NAME.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES_NAME.LOGIN} element={<LoginPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
