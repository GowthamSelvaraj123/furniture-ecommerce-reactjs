import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom"
export default function NavBar({menus})
{

    const [currentIndex, setActiveIndex] = useState(0);
    function activeChange(index)
    {
        setActiveIndex(index);
    }
    return(         
    <>
            <div className="collapse navbar-collapse justify-content-end" id="navbarsFurni">
                <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    {menus.map((menu, index) => { return(
                        <li  className={`nav-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <Link to={menu.link} currentValue={index} onClick={() => activeChange(index)} className="nav-link">{menu.name}</Link>
                            </li>)})}
                </ul>
            </div>
    </>)

}