import React from 'react';
import { useTheme } from "../../context/ThemeContext";

const Button = ({ onClick, children, ButtonClassName }) => {
    const  {theme} = useTheme();

    return (
        <button
            onClick={onClick}
            className={`mt-4 px-6 py-2 rounded text-white font-semibold bg-${theme}-primary hover:bg-opacity-90 outline-none focus:outline-none focus:ring-2 focus:ring-${theme}-primary ${ButtonClassName}`}
        >
            {children}
        </button>
    );
};

export default Button;
