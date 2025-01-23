import React, { useState } from 'react'
import Popup from '../Popup/Popup'
import axios from 'axios';



const LoginForm = ({ togleForm}) => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle login logic here
        try {
            const response = await axios.post('/api/auth/login', {
                email: formData.email,
                password: formData.password
            });

            if (response.data) {
                // Handle successful login
                console.log('Login successful:', response.data);
                // You can add logic here to:
                // - Store auth token
                // - Redirect user
                // - Update app state
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            // Handle login error
            // You can add logic here to show error messages to user
        }
    };
    return (
        <div className="flex  min-h-full">
            {/* Left Panel */}
            <div className="w-1/2 p-12 hidden md:flex  bg-blue-500  text-white flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-bold mb-4 w-1/2">Welcome Back To LandAcers!</h1>
                <p className="mb-8">
                    We are so excited to have you here. Login to access 
                    exclusive offers, rewards, and discounts.
                </p>
                <button 
                    className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
                    onClick={() => togleForm()}
                >
                    Don't have an account? Sign up.
                </button>
            </div>

            {/* Right Panel - Login Form */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="md:hidden text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Welcome Back To LandAcers!</h1>
                    
                    
                </div>
                <h2 className="text-2xl font-semibold mb-8">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="support@bytewebster.com"
                            className="w-full p-3 rounded-lg bg-gray-100"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full p-3 rounded-lg bg-gray-100"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>
                    <button 
                        className="w-full md:hidden text-sm bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 mt-2"
                        onClick={() => togleForm()}
                    >
                        Don't have an account? Sign up.
                    </button>
                    {/* <div className="text-center mt-4">
                        <p className="text-gray-600 mb-4">or login with</p>
                        <div className="flex justify-center space-x-4">
                            <button type="button" className="p-2 rounded-full bg-gray-100">
                                <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
                            </button>
                            <button type="button" className="p-2 rounded-full bg-gray-100">
                                <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                            </button>
                            <button type="button" className="p-2 rounded-full bg-gray-100">
                                <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
                            </button>
                        </div>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

const SignUpForm = ({ toggleForm}) => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async̀(e) => {
        e.preventDefault();
        // Validation checks
        if (!formData.fullName.trim()) {
            alert('Please enter your full name');
            return;
        }

        if (!formData.email.trim()) {
            alert('Please enter your email');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!formData.phone.trim()) {
            alert('Please enter your phone number');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        if (!formData.password) {
            alert('Please enter a password');
            return;
        }

        if (formData.password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('/api/auth/signup', {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });

            if (response.data.success) {
                alert('Account created successfully! Please login.');
                toggleForm();
            } else {
                alert(response.data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert(error.response?.data?.message || 'An error occurred during registration');
        }
    };

    return (
        <div className="flex min-h-full">
            {/* Left Panel */}
            <div className="w-1/2 p-12 hidden md:flex bg-blue-500 text-white flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-bold mb-4 w-1/2">Join LandAcers Today!</h1>
                <p className="mb-8">
                    Create an account to unlock exclusive property listings,
                    save your favorites, and get personalized recommendations.
                </p>
                <button 
                    className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
                    onClick={() => toggleForm()}
                >
                    Already have an account? Login.
                </button>
            </div>

            {/* Right Panel - Signup Form */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="md:hidden text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Join LandAcers Today!</h1>
                </div>
                <h2 className="text-2xl font-semibold mb-8">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 rounded-lg bg-gray-100"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full p-3 rounded-lg bg-gray-100"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                if (value.length <= 10 && value.length >= 10) {
                                    handleChange({
                                        target: {
                                            id: 'phone',
                                            value: value
                                        }
                                    });
                                } else if (value.length < 10) {
                                    handleChange({
                                        target: {
                                            id: 'phone',
                                            value: value
                                        }
                                    });
                                }
                            }}
                            placeholder="Phone Number "
                            className="w-full p-3 rounded-lg bg-gray-100"
                            maxLength="12"
                            pattern="[0-9]{10,12}"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create Password"
                            className="w-full p-3 rounded-lg bg-gray-100"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full p-3 rounded-lg bg-gray-100"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Sign Up
                    </button>
                    <button 
                        className="w-full md:hidden text-sm bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 mt-2"
                        onClick={() => toggleForm()}
                    >
                        Already have an account? Login.
                    </button>
                </form>
            </div>
        </div>
    )
}




const Authentication = ({ isOpen, setIsOpen }) => {
    const [signUpForm, setSignUpForm] = useState(false)
    const toggleForm = ()=>{
        setSignUpForm(!signUpForm)
    }
    const handleClose = () => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.style.position = 'static';
        document.body.style.width = 'auto';
        setIsOpen(false)
    }

    return (
        <>
            <Popup isOpen={isOpen} onClose={handleClose}>
                {signUpForm ? <SignUpForm  toggleForm={toggleForm}/>: <LoginForm togleForm={toggleForm}/>}
            </Popup>
        </>
    )
}

export default Authentication