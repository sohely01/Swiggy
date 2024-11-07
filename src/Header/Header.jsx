
import { Link } from "react-router-dom";
import { useState } from "react"
import { useSelector } from "react-redux";



const Header = () => {

    const [LoginBtn , setLoginBtn] = useState("Login");


    const cartItem = useSelector((store)=> store.cart.items);




  return (
    <div className='Header' style={{backgroundColor:'burlywood'}}>
      
    <div className="header_Logo">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" width="10%"   style={{marginTop:'3%'}}/>
    </div>

    <div className="nav-items">
        <ul>
            <li>
                <Link to="/">
                Home
                </Link> </li>


            <li>
                <Link to="/about">
                About
                </Link></li>


            <li> 
                <Link to="/contact">
                Contact
                </Link></li>


            <li>
                <Link to="/cart">
                Cart {(cartItem.length)} Items
                </Link>  </li>
            <button className="Login" onClick={(()=>{
                    LoginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
            })}> {LoginBtn}</button>
          
        </ul>
    </div>


    </div>
  )
}

export default Header
