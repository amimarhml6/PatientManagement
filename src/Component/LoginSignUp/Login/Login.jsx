import './Login.css';
import { useState, useEffect } from 'react';
import Password from '../TextField/Password';
import Gmail from '../TextField/Gmail';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState("");

  const initialUser=[
    {
        email:"amarhml@gmail.com",
        fullName:"Amar",
        password:"123456"
    },
    {
        email:"ramy@gmail.com",
        fullName:"Ramy",
        password:"123456"
    },
    {
        email:"abdou@gmail.com",
        fullName:"Abdou",
        Password:"123456"
    }
  ]

  const initialAdmin = [
    {
        email: "amarhml@gmail.com",
        fullName: "Amar"
    },
    {
        email: "ramy@gmail.com",
        fullName: "Ramy"
    },
    {
        email: "abdou@gmail.com",
        fullName: "Abdou"
    }
];

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem('Login', 'false');
    localStorage.removeItem('userConnected');
    const storedAdmins = JSON.parse(localStorage.getItem('AdminsUser'));
    if (!storedAdmins) {
        localStorage.setItem('AdminsUser', JSON.stringify(initialAdmin));
    }
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      localStorage.setItem("users", JSON.stringify(initialUser));
    }

  }, []);

  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    if (field === "email") {
      setEmailValid(validateEmail(value)); 
    }
  };

  const isFormValid = emailValid && formData.password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => 
      user.email === formData.email && user.password === formData.password
    );

    if (!existingUser) {
      setErrorMessage("Invalid email or password. Please try again.");
      return;
    }

    localStorage.setItem('Login', 'true');
    localStorage.setItem('userConnected', existingUser.email); 

    navigate('/Home'); 
  };

  return (
    <div className="LoginInterface">
      <h1 style={{ color: "white" }}>Login</h1>
      <div className="Login-blg">
        <form className='forms-login' onSubmit={handleSubmit}>
          <div className="for">
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <Gmail value={formData.email} onChange={(val) => handleChange('email', val)} />
            <Password value={formData.password} onChange={(val) => handleChange('password', val)} />
          </div>

          <p className='p-login'>
            You don't have an account? <Link to='/signup' className='Sign-up' style={{ color: "red" }}>Sign Up</Link>
          </p>

          <button type="submit" className='login-Submit' disabled={!isFormValid}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;