// react
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ShipingFee = 30;
  var priceArray = [];

  // cartitems useEffect
  useEffect(() => {
    cartItems?.forEach((item) => {
      let _discountPrice = item.discountprice;
      let _price = item.price;

      priceArray.push(_discountPrice || _price);
    });
    setSubTotal(priceArray.reduce((a, b) => a + b, 0));
  }, [cartItems]);

  useEffect(() => {
    setTotal(() => subTotal + ShipingFee);
  }, [subTotal]);
  // auth useEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const sharedContext = {
    user,
    setUser,
    cartItems,
    setCartItems,
    subTotal,
    setSubTotal,
    total,
    setTotal,
    sidebarOpen,
    setSidebarOpen,
    ShipingFee,
    priceArray,
  };
  return (
    <GlobalContext.Provider value={sharedContext}>
      {children}
    </GlobalContext.Provider>
  );
};
function useGlobalContext() {
  return useContext(GlobalContext);
}

export default GlobalContext;
export { GlobalContextProvider, useGlobalContext };
