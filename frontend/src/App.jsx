import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import HomeNavbar from './components/homeNavbar/HomeNavbar';

function App() {
    return (
        <Router>
            <HomeNavbar />
            <Routes>
                <Route exact path='/' Component={Home}/>
                <Route exact path='/login' Component={Login}/>
                <Route exact path='/register' Component={Register}/>
            </Routes>
        </Router>
    );
}

export default App;
