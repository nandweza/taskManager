import HomeNavbar from '../../components/homeNavbar/HomeNavbar';
import './home.css'

const Home = () => {
    return (
        <div>
            <HomeNavbar />
            <div className="home pt-5">
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className="container pt-5">
                        <div className='row'>
                            <div className='col-lg-6 pt-5'>
                                <div className='home-text text-left p-5'>    
                                    <h1 className='pt-5'>Manage all your Tasks in a glance</h1>
                                    <p className='pb-2'>Let's you Plan, track and organize all your tasks with ease</p>
                                    <span className='home-btn'>
                                        <a href='/login'>
                                            <button className='btn btn-lg btn-light btn-one'>Login</button>
                                        </a>
                                        <a href='/register'>
                                            <button className='btn btn-lg btn-dark mx-4'>Register</button>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='home-img text-center pt-5'>
                                    <img 
                                      src='https://images.pexels.com/photos/5200784/pexels-photo-5200784.jpeg?auto=compress&cs=tinysrgb&w=400' 
                                      alt='home' 
                                      className='img-responsive' 
                                      width='' 
                                      height='' 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;