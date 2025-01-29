import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import PropertiesPage from "./pages/propertiesPages/PropertiesPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import PropertyProfile from './pages/propertiesPages/PropertyProfile';
import WithNavbarAndFooter from "./HOCS/NavFotHoc";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import AdminLogin from './admin/Pages/AdminLogin/AdminLogin';
import AdminDashboard from './admin/Pages/Dashboard/Dashboard';
import AllProperties from "./admin/Pages/Properties/AllProperties";
import ManageProperty from "./admin/Pages/Properties/ManageProperties";
import ManageUsers from "./admin/Pages/Users/ManageUsers"
import BrokerManagement from "./admin/Pages/Brokers/BrokerManagement";
import QueriesManagement from "./admin/Pages/Queries/ManageQueries";
import AddProperty from "./admin/Pages/Properties/AddProperties";

import ROUTES_NAME from "./constants/routes";
import './Assets/Global.css';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ToastContainer position="top-left" /> {/* Add ToastContainer for react-toastify */}
        <Routes>
          <Route path={ROUTES_NAME.HOME} element={<WithNavbarAndFooter WrappedComponent={HomePage} />} />
          <Route path={ROUTES_NAME.PROPERTIES} element={<WithNavbarAndFooter WrappedComponent={PropertiesPage} />} />
          <Route path={ROUTES_NAME.ABOUT} element={<WithNavbarAndFooter WrappedComponent={AboutPage} />} />
          <Route path={ROUTES_NAME.CONTACT} element={<WithNavbarAndFooter WrappedComponent={ContactPage} />} />
          <Route path={ROUTES_NAME.VIEW_PROPERTY} element={<WithNavbarAndFooter WrappedComponent={PropertyProfile} />} />
          <Route path={ROUTES_NAME.ADMIN_LOGIN} element={<AdminLogin />} />
          <Route path={ROUTES_NAME.ADMIN_DASHBOARD} element={<AdminDashboard />} />
          <Route path={ROUTES_NAME.ADMIN_ALL_PROPERTIES} element={<AllProperties />} />
          <Route path={ROUTES_NAME.ADMIN_MANAGE_PROPERTIES} element={<ManageProperty />} />
          <Route path={ROUTES_NAME.ADMIN_MANAGE_USERS} element={<ManageUsers />} />
          <Route path={ROUTES_NAME.ADMIN_MANAGE_BROKERS} element={<BrokerManagement />} />
          <Route path={ROUTES_NAME.ADMIN_MANAGE_QUERIES} element={<QueriesManagement />} />
          <Route path={ROUTES_NAME.ADMIN_PROPERTY_ADD} element={<AddProperty />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
