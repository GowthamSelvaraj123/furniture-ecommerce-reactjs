import { Link } from "react-router-dom";
import NavBar from "../UI/nav/NavBar";
import SiteLogo from "../UI/sitelogo/SiteLogo";
import useScroll from '../../hooks/useScroll'; // Adjust the path based on your file structure

export default function Header() {
    const isScrolling = useScroll();

    const menuLists = [
        { name: 'Home', link: '/' },
        { name: 'Shop', link: '/shop' },
        { name: 'About us', link: '/about-us' },
        { name: 'Service', link: '/service' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact us', link: '/contact-us' }
    ];

    return (
        <nav className={`custom-navbar navbar navbar-expand-md navbar-dark fixed-top ${isScrolling ? 'scrolling' : ''}`} aria-label="Furni navigation bar">
            <div className="container">
                <SiteLogo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavBar menus={menuLists} />
                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    {["/profile", "/cart"].map((link, index) => (
                        <li className="nav-item" key={index}>
                            <Link to={link} className="nav-link">
                                <img src={link === "/profile" ? "/user.svg" : "/cart.svg"} alt={link === "/profile" ? "User Profile" : "Shopping Cart"} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
