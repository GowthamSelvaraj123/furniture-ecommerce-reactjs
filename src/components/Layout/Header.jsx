import { Link } from "react-router-dom";
import NavBar from "../UI/nav/NavBar";
import SiteLogo from "../UI/sitelogo/SiteLogo";
export default function Header()
{
    const menuLists = [
        {name:'Home', link:'/'}, 
        {name:'Shop', link:'/shop'},
        {name:'About us', link:'about-us'},
        {name:'Service', link:'service'},
        {name:'Blog', link:'blog'},
        {name:'Contact us', link:'contact-us'}
    ]
    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark" arial-label="Furni navigation bar">
                    <div className="container">
                        <SiteLogo></SiteLogo> 
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <NavBar menus={menuLists}></NavBar>
                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li>
                    <Link to="/profile" className= "nav-link"><img src="src/assets/user.svg" /></Link></li>
                    <li>
                    <Link to="/cart" className= "nav-link"><img src="src/assets/cart.svg" /></Link></li>
                </ul>

                    </div>
        </nav>
    );

}