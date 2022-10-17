import React from "react";
import cart from '../../images/shopping-cart.png'
import '../NavBar/navbar.css'

const CartWidget =()=>{
return(
    <>
    <img className="cart-icon" src={cart} alt="cart-icon" />
    </>
)
}

export default CartWidget 