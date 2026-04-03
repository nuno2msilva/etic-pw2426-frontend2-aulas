import { Link } from 'react-router-dom';
import '../../App.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar-title'>
                <img src="/vite.svg" alt="Vite logo" style={{ height: '40px', marginRight: '10px' }} />
                <h2>Vite & React</h2>
            </div>
            <nav className='navbar-links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/search">Search</Link>
            </nav>
        </div>
    )
}

export default Navbar;