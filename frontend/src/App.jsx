import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Task from './pages/tasks/Task';
import { useState, useEffect } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<Home />}
                />
                <Route
                    exact
                    path='/login'
                    element={<Login onLogin={handleLogin} />}
                />
                <Route
                    exact
                    path='/register'
                    element={<Register />}
                />
                {isLoggedIn ? (
                    <Route
                        exact
                        path='/task'
                        element={<Task onLogout={handleLogout} />}
                    />
                ) : (
                    <Route
                        exact
                        path='/login'
                        element={<Login onLogin={handleLogin} />}
                    />
                )}
            </Routes>
        </Router>
    );
}

export default App;
