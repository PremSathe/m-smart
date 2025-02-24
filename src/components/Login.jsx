import React, { useState } from 'react';
// import { RefreshCw } from 'lucide-react';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('pprKji');
    const [captchaInput, setCaptchaInput] = useState('');

    const generateCaptcha = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captchaInput === captcha) {
            alert(`Logging in with Username: ${username} and Password: ${password}`);
        } else {
            alert('Captcha is incorrect. Please try again.');
        }
    };

    return (
        <div className="page-container">


            {/* Main content wrapper */}
            <div className="content-wrapper">
                {/* Landing page content - Left side */}
                <div className="landing-content">
                    <h1>M-Smart starts here. For both commercial and personal</h1>
                    <button className="get-start-btn">Get Start</button>
                </div>

                {/* Login content - Right side */}
                <div className="login-content">
                    {/* <header className="login-header">
            <img src="/api/placeholder/163/37" alt="Company Logo" />
          </header> */}

                    <div className="login-form-container">
                        <div className="welcome-section">
                            <h4>Welcome to</h4>
                            <h2>M-Smart</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <div className="password-header">
                                    <label htmlFor="password">Password</label>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="toggle-password"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="remember-password">
                                <input
                                    type="checkbox"
                                    id="remember-password"
                                />
                                <label htmlFor="remember-password">Remember Password</label>
                            </div>

                            {/* <div className="captcha-section">
                <button type="button" className="captcha-text">
                  {captcha}
                </button>
                <button
                  type="button"
                  onClick={() => setCaptcha(generateCaptcha(6))}
                  className="refresh-button"
                >
                  <RefreshCw />
                </button>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter CAPTCHA"
                  required
                />
              </div> */}
{/* 
                            <button type="submit" className="login-button">
                                Login
                            </button> */}

                            <button
                                type="button"
                                className="login-button"
                                onClick={() => window.location.href = "https://m-smart.vercel.app/sop-repository"}
                            >
                                Login
                            </button>



                            {/* <div className="register-link">
                Don't have an account?{' '}
                <a href="/register">Register Now</a>
              </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;