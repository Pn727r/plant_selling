import {Link } from "react-router-dom";
import Cart from '@mui/icons-material/AddShoppingCart';

const Cart_com  = ()=>{
    return <>
    <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <Cart/>
                        {localStorage.getItem("cart_len") != null ? localStorage.getItem("cart_len") : 1 }
                    </Link>
                  </li>
    </>
}

export default Cart_com