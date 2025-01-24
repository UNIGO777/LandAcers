import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a separate component
import Footer from './Footer'; // Assuming Footer is a separate component

const withNavbarAndFooter = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <Navbar />
                <WrappedComponent {...props} />
                <Footer />
            </div>
        );
    };
};

export default withNavbarAndFooter;
