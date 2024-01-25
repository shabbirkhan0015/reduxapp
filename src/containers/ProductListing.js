import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";


const ProductListing =()=>{
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    const fetchProducts = async () =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=> console.log(err));
        
        dispatch(setProducts(response.data))
        console.log(response.data)
        
    }
    console.log("listing", products)

    useEffect(() => {
        fetchProducts();
      }, []);
    
    return (
        <>
          <ProductComponent/>
        </>  
                
    )
}

export default ProductListing;