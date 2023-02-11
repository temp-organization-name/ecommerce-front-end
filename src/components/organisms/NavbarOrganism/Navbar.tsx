import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import cart from '../../../images/icon-cart.svg'

export const Navbar: React.FC = () => (
    <nav className={styles.navigation}>
        <h1>Ecommerce</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <img src={cart} alt="" />
    </nav>
)
