import { useEffect, useState } from "react";
import { getStoredBook } from "../pages/Login/Firebase/Database";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getStoredBook();
    const keys = Object.keys(saveCart)
      console.log(keys)
    if (products.length) {
      const saveCart = getStoredBook();
      const storedCart = [];
      for (const _id in saveCart) {
        const addedProduct = products.find(product =>  product._id === _id);
        if(addedProduct){
          const quantity = saveCart[_id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart)
    }
  }, [products]);
  return [cart, setCart];
};

export default useCart;