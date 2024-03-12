import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Plant from "./Plants.jsx";
import Navigation from "./Navigation.jsx";
import Pots from "./Pots.jsx"; 
import Soil from "./Soil.jsx";
import Util from "./Utilities.jsx" ;
import Bussiness2 from "./Bussiness2.jsx" ;
import SignUp from "./SignUp.jsx" ;
import SignIn from "./SignIn.jsx" ;
import MyCart from './Cart.jsx';
import MyFav from "./Fav.jsx";
import {useState} from 'react' ; 
import {getLen} from './Global.jsx'; 

export default function App() {
  const [len, setlen] = useState(getLen())
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation len={len}/>}>
          
          <Route index element={<Home />} />
          <Route path="/plants" element={<Plant setlen={setlen} />} />
          <Route path="/pots" element={<Pots setlen={setlen}/>} />
          <Route path="/soil" element={<Soil setlen={setlen}/>} />
          <Route path="/util" element={<Util setlen={setlen}/>} />
          <Route path="/business" element={<Bussiness2 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<MyCart setlen={setlen}/>}/>
          <Route path="/favorite" element={<MyFav />}/>

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
