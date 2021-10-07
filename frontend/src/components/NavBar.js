import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to='/cart' className="cart__link">
                        <i className="fa fa-shopping-cart"></i>
                        <span>
                        Cart
                        <span className="cartlogo__badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i></i>
                        Shop
                    </Link>
                </li>
            </ul>
            {/* hamburger  */}
            <div className="hamburger__menu"></div>
            <div></div>
            <div></div>
            <div></div>
        </nav>
    )
}

export default NavBar

