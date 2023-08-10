import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import HomeNavbar from '../../components/homeNavbar/HomeNavbar';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = async (username, password) => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
            username,
            password,
          });
          return response.data;
        } catch (error) {
          throw error.response.data;
        }
      };
      

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await loginUser(username, password);
            localStorage.setItem('token', token);

            onLogin();
            navigate('/task');
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <>
        <HomeNavbar />
        <div className="container-fluid login-container d-flex align-items-center justify-content-center">
            <div className="col-md-6 login-form">
                <h2 className='px-2'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group p-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group p-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                    </div>
                    <div className="form-group p-2">
                        <button 
                            type="submit"
                            className="btn btn-lg btn-primary"
                            >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="form-text text-center py-2">
                    New to <strong>taskManager</strong>? <a href="/register">Register here</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
