import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import PropertiesPage from "./pages/propertiesPages/PropertiesPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import AdminDashboard from './admin/Dashboard';
import AdminLogin from './admin/AdminLogin';
import PropertyProfile from './pages/propertiesPages/PropertyProfile';
import WithNavbarAndFooter from "./HOCS/NavFotHoc";
import AllProperties from "./admin/components/AllProperties";
import ManageProperty from "./admin/components/ManageProperties";

import ROUTES_NAME from "./constants/routes";
import './Assets/Global.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES_NAME.HOME} element={<WithNavbarAndFooter WrappedComponent={HomePage} />} />
          <Route path={ROUTES_NAME.PROPERTIES} element={<WithNavbarAndFooter WrappedComponent={PropertiesPage} />} />
          <Route path={ROUTES_NAME.ABOUT} element={<WithNavbarAndFooter WrappedComponent={AboutPage} />} />
          <Route path={ROUTES_NAME.CONTACT} element={<WithNavbarAndFooter WrappedComponent={ContactPage} />} />
          <Route path={ROUTES_NAME.ADMIN_DASHBOARD} element={<AdminDashboard />} />
          <Route path={ROUTES_NAME.ADMIN_LOGIN} element={<AdminLogin />} />
          <Route path={ROUTES_NAME.ADMIN_ALL_PROPERTIES} element={<AllProperties />} />
          <Route path={ROUTES_NAME.ADMIN_MANAGE_PROPERTIES} element={<ManageProperty />} />
          <Route path={ROUTES_NAME.VIEW_PROPERTY} element={<WithNavbarAndFooter WrappedComponent={PropertyProfile} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
