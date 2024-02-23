import {Link } from "react-router-dom";
import Cart from '@mui/icons-material/AddShoppingCart';

const Cart_com  = ()=>{
    let data = window.localStorage.getItem('cart');

    return <>
    <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <Cart/>
                        { data ? JSON.parse(data).length : 0 }
                    </Link>
                  </li>
    </>
}

export default Cart_com