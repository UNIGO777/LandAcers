import React, { useState } from 'react'
import Popup from '../Popup/Popup'
import axios from 'axios';
import { toast } from 'react-toastify';
import OtpInput from 'react-otp-input';


const OtpInputScreen = ({phone, setotpScreen, toggleForm})=>{
    const [otp, setOtp] = useState('');
    const handleChange = (value) => {
        const sanitizedValue = value.replace(/[^0-9]/g, ''); // Ensure only numeric input
        setOtp(sanitizedValue);
      };
      const handleSubmit = async () => {
        try {
           
          // Replace with actual data
          const phoneNumber = phone; // Replace with dynamic value
           // Replace with dynamic value
            console.log("akshd")
          // API URL
          const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/user/register/verify-otp`;
      
          // Request payload
          const payload = { phoneNumber, otp };
      
          // Make the API request
          const response = await axios.post(apiUrl, payload);
      
          // Handle successful response
          if (response.status === 201) {
            console.log("OTP verification successful:", response.data);

            toast.success("Registration successful! You can now log in.");
            toggleForm()
          } else {
            console.log("Unexpected response:", response.data);
          }
        } catch (error) {
          // Handle errors
          if (error.response) {
            // Backend returned an error response
            
            toast.error(error.response.data.message || "OTP verification failed.");
          } else if (error.request) {
            // No response received
         
            toast.error("Failed to reach the server. Please try again.");
          } else {
            // Error setting up the request
   
            toast.error("An unexpected error occurred. Please try again.");
          }
        }
      };
    return(
        <>
        <div className="otp-input-container flex flex-col items-center">
            <label htmlFor="otp" className="mb-2 text-lg font-semibold">Varify your phone</label>
            <p className='text-blue-500 mb-5'>Otp sent to : <span className='underline cursor-pointer text-blue-400' onClick={()=>setotpScreen(false)}>{phone || "not comming"}</span></p>
            <OtpInput
                value={otp}
                onChange={handleChange}
                className="border-b-4  text-black border-blue-500 focus:outline-none focus:border-blue-700"
                numInputs={6}
                renderSeparator={<span className="mx-1">-</span>}
                renderInput={(props) => (
                    <input
                        {...props}
                        className=" text-black w-10 md:w-12  h-12 text-center text-xl border rounded-md focus:ring-2 focus:ring-blue-500"
                        style={{ borderRadius: '4px' }}
                        type="text" inputMode="numeric" pattern="[0-9]*"
                    />
                )}
            />
            <button className='mt-10 p-3 w-1/2 font-bold text-white uppercase rounded-md bg-blue-500' onClick={handleSubmit}>
                Varify
            </button>

        </div>
        </>
    )
}

const LoginForm = ({ togleForm }) => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const [notSubmitable, setNotSubmitable] = useState(false)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNotSubmitable(true)
        // Handle login logic here
        
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, {
                email: formData.email,
                password: formData.password
            });

            if (response.data) {
                // Handle successful login
                localStorage.setItem("userToken",response.data.token)
                localStorage.setItem("user",JSON.stringify(response.data.user))
                
                setNotSubmitable(false)
                toast.success('Login successful')
                window.location.reload()
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            setNotSubmitable(false)
            toast.error(error.response?.data?.message || error.message)
            
        }
    };
    return (
        <div className="flex min-h-full">
            {/* Left Panel */}
            <div className="flex-col items-center justify-center hidden w-1/2 p-12 text-center text-white bg-blue-500 md:flex">
                <h1 className="w-1/2 mb-4 text-3xl font-bold">Welcome Back To LandAcers!</h1>
                <p className="mb-8">
                    We are so excited to have you here. Login to access
                    exclusive offers, rewards, and discounts.
                </p>
                <button
                    className="px-6 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-600"
                    onClick={() => togleForm()}
                >
                    Don't have an account? Sign up.
                </button>
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex flex-col justify-center p-12 md:w-1/2">
                <div className="mb-8 text-center md:hidden">
                    <h1 className="mb-2 text-2xl font-bold">Welcome Back To LandAcers!</h1>


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
                        className={`w-full bg-blue-500 text-white py-3 rounded-lg ${notSubmitable && "opacity-50"} hover:bg-blue-700`}
                        disabled={notSubmitable}
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
                                <img loding="lazy" src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
                            </button>
                            <button type="button" className="p-2 rounded-full bg-gray-100">
                                <img loding="lazy" src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                            </button>
                            <button type="button" className="p-2 rounded-full bg-gray-100">
                                <img loding="lazy" src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
                            </button>
                        </div>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

const SignUpForm = ({ toggleForm }) => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [notSubmitable, setNotSubmitable] = useState(false)

    const [otpScreen, setotpScreen] = useState(false)



    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNotSubmitable(true)
        // Validation checks
        if (!formData.fullName.trim()) {
            toast.error('Please enter your full name');
            setNotSubmitable(false)
            return;
        }

        if (!formData.email.trim()) {
            toast.error('Please enter your email');
            setNotSubmitable(false)
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            setNotSubmitable(false)
            return;
        }

        if (!formData.phone.trim()) {
            toast.error('Please enter your phone number');
            setNotSubmitable(false)
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error('Please enter a valid 10-digit phone number');
            setNotSubmitable(false)
            return;
        }

        if (!formData.password) {
            toast.error('Please enter a password');
            setNotSubmitable(false)
            return;
        }

        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            setNotSubmitable(false)
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            setNotSubmitable(false)
            return;
        }

        try {
            const nameParts = formData.fullName.split(' ');
            if (nameParts.length < 2) {
                toast.error('Please enter both first name and last name');
                setNotSubmitable(false)
                return;
            }
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(' ');

            // You can now use firstName and lastName for further processing
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/register`, {
                firstName: firstName,
                lastName: lastName,
                email: formData.email,
                phoneNumber: formData.phone,
                password: formData.password
            });

            if (response.data) {
                toast.success(response.data.massage)
                setotpScreen(true)
            }
        } catch (error) {
            if (error?.response.data?.errors) {
                error.response.data.errors.map((item) => toast.error(item))
                setNotSubmitable(false)
            }
            toast.error(error.response?.data?.message || 'An error occurred during registration');
        } finally{
            setNotSubmitable(false)
        }
    };



    return (
        <div className="flex min-h-full">
            {/* Left Panel */}
            <div className="flex-col items-center justify-center hidden w-1/2 p-12 text-center text-white bg-blue-500 md:flex">
                <h1 className="w-1/2 mb-4 text-3xl font-bold">Join LandAcers Today!</h1>
                <p className="mb-8">
                    Create an account to unlock exclusive property listings,
                    save your favorites, and get personalized recommendations.
                </p>
                <button
                    className="px-6 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-600"
                    onClick={() => toggleForm()}
                >
                    Already have an account? Login.
                </button>
            </div>

            {/* Right Panel - Signup Form */}
            {otpScreen ?
                <><div className="flex flex-col justify-center p-5 md:p-12 md:w-1/2">
                    
                        <OtpInputScreen phone={formData.phone} setotpScreen={setotpScreen} toggleForm={toggleForm}/>
                </div></> :
                <div className="flex flex-col justify-center p-12 md:w-1/2">
                    <div className="text-center md:hidden">
                        <h1 className="mb-5 text-2xl font-extrabold">Join LandAcers <br/> Today!</h1>
                    </div>
                    <h2 className="mb-8 text-2xl font-semibold">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                id="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full p-3 bg-gray-100 rounded-lg"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full p-3 bg-gray-100 rounded-lg"
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
                                className="w-full p-3 bg-gray-100 rounded-lg"
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
                                className="w-full p-3 bg-gray-100 rounded-lg"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="w-full p-3 bg-gray-100 rounded-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700 ${notSubmitable && 'opacity-50'}`}
                            disabled={notSubmitable}
                        >
                            Sign Up
                        </button>
                        <button
                            className="w-full py-3 mt-2 text-sm text-gray-700 bg-gray-100 rounded-lg md:hidden hover:bg-gray-200"

                            onClick={() => toggleForm()}
                        >
                            Already have an account? Login.
                        </button>
                    </form>
                </div>}
        </div>
    )
}




const Authentication = ({ isOpen, setIsOpen }) => {
    const [signUpForm, setSignUpForm] = useState(false)
    const toggleForm = () => {
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
                {signUpForm ? <SignUpForm toggleForm={toggleForm} /> : <LoginForm togleForm={toggleForm} />}
            </Popup>
        </>
    )
}

export default Authentication

// import React, { useState } from 'react';
// import LoginModal from './login';
// import SignUpModal from './singup';

// export default function AuthModal({ isOpen, onClose, initialView = 'login' }) {
//   const [view, setView] = useState(initialView);

//   const toggleView = () => {
//     setView(view === 'login' ? 'signup' : 'login');
//   };

//   if (!isOpen) return null;

//   return view === 'login' ? (
//     <LoginModal isOpen={isOpen} onClose={onClose} onToggleForm={toggleView} />
//   ) : (
//     <SignUpModal isOpen={isOpen} onClose={onClose} onToggleForm={toggleView} />
//   );
// }

