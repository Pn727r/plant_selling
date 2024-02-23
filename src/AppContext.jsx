import { createContext, useContext} from "react";
import {getCart} from "./Global";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const cart_count = getCart().length;

  const update_cart_count = () => {
    const cart = getCart();
    let len = cart.length;
    return len ; 
  };

  return (
    <AppContext.Provider value={{cart_count , update_cart_count}}>
        {children}
    </AppContext.Provider>
  )
};


export const useAppContext = ()=>{
    return useContext(AppContext);
}