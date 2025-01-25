import React from 'react';
import Navbar from '../components/navbar/Navbar'; // Assuming Navbar is a separate component
import Footer from '../components/Footer/Footer'; // Assuming Footer is a separate component
import SearchBox from '../components/SearchBox/SearchBox';


const WithNavbarAndFooter = ({ WrappedComponent }) => {
    return (
        <div>
            <Navbar />
            
            <WrappedComponent />
            <Footer />
        </div>
    );
};

export default WithNavbarAndFooter;
