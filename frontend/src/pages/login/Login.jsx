import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="container-fluid login-container d-flex align-items-center justify-content-center">
            <div className="col-md-6 login-form">
                <h2 className='px-2'>Login</h2>
                <form>
                    <div className="form-group p-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group p-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form-group p-2">
                        <button type="submit" className="btn btn-primary btn-block">
                            Log in
                        </button>
                    </div>
                </form>
                <div className="text-center py-2">
                    New to <strong>taskManager</strong>? <a href="/register">Register here</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
