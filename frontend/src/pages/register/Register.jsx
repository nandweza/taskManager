import React, { useState, useEffect } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../../api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     handleRegister()
    // });
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register', {
                username,
                password
            });
            navigate("/login");
            console.log(response.data);
        } catch (error){
            setError("Failed to register user!!");
        }
    }

    return (
        <div className="container-fluid register-container d-flex align-items-center justify-content-center">
            <div className="col-md-6 register-form">
                <h2 className='px-2'>Register</h2>
                <form onSubmit={handleRegister}>
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
                        <button type="submit" className="btn btn-primary btn-block">
                            Register
                        </button>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                </form>
                <div className="form-text text-center py-2">
                    Already a member? <a href="/login">Login here</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
