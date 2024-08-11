import { useState } from "react";
import LOGO_URL from "../utils/constant"
import { Link } from "react-router-dom";

const Header = () => {

   const [btnName,setBtnName] = useState('Login');

   return (
       <div className="header">
          <div>
             <img className="logo" src={LOGO_URL}></img>
          </div>
          <div className="nav-items">
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li><button onClick={ () => {
                  btnName == 'Login' ? setBtnName('Log Out') : setBtnName('Login');
                }}>{btnName}</button></li>
             </ul>
          </div>
       </div>
    )
 }

 export default Header;