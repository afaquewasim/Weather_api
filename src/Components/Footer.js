import React from "react";
import './css/mystyle.css';

function Footer() {
    const today = new Date()
    return (
        <div className="App">
            
            <footer>
                <p>Copyright &copy; {today.getFullYear()} All Rights Reserved</p>
            </footer>
        </div>
    );  
}
  
  export default Footer;







      