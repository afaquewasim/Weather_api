import React from "react";
import './css/mystyle.css';

function Header() {
    return (
        <div className="App">
            <header className="header">
                <nav>
                    <div className="main-links" id="navLinks">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">MENU</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CONTACT US</a></li>
                            <li><a href="#">LOGIN/REGISTER</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );  
  }
  
  export default Header;