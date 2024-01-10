import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Plant from "./Plants.jsx";
import Navigation from "./Navigation.jsx";
import Pots from "./Pots.jsx"; 
import Soil from "./Soil.jsx";
import Util from "./Utilities.jsx" ;
import Business from "./Business.jsx" ;
import SignUp from "./SignUp.jsx" ;
import SignIn from "./SignIn.jsx" ;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          
          <Route index element={<Home />} />
          <Route path="/plants" element={<Plant />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/soil" element={<Soil />} />
          <Route path="/util" element={<Util />} />
          <Route path="/business" element={<Business />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
