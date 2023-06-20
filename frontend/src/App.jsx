import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Task from './pages/tasks/Task';
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };

    // const navigate = useNavigate();

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
                        element={<Task />} 
                    />
                ) : (
                    <Navigate 
                        to='/login'
                        replace 
                    />
                )}
            </Routes>
        </Router>
    );
}

export default App;
