import React from 'react';
import './register.css';

const Register = () => {
    return (
        <div className="container-fluid register-container d-flex align-items-center justify-content-center">
            <div className="col-md-6 register-form">
                <h2 className='px-2'>Register</h2>
                <form>
                    <div className="form-group p-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
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
                            Register
                        </button>
                    </div>
                </form>
                <div className="form-text text-center py-2">
                    Already a member? <a href="/login">Login here</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
