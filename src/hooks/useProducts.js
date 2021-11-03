import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://creepy-alien-88782.herokuapp.com/Travels')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    //return necessary things
    return [products, setProducts];
};

export default useProducts;