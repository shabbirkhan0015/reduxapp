import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";


const ProductDetails =()=>{
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
    };
  
    useEffect(() => {
      if (productId && productId !== "") fetchProductDetail(productId);
      return () => {
        dispatch(removeSelectedProduct());
      };
    }, [productId]);
    return (

        <div className="flex items-center justify-center h-1/2 w-80vw overflow-hidden my-8">
             {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
      ) : (
            <div className="flex items-center justify-center overflow-hidden border border-black-600 ">
            <div className="overflow-hidden m-4 w-1/2 flex justify-center">
            <img className="w-1/2 h-80 object-contain" src={image} alt={title} />    
                </div>
                <div className="flex-col justify-center space-y- items-center space-y-4 p-4 w-1/2">
                    <div className="text-2xl">{title}</div>
                    <div><span className="bg-cyan-400 p-2">${price}</span></div>
                    <div className="text-xl">{category}</div>
                    <div className="text-xl w-80 text-justify">{description}</div>
                </div>
            </div>
             )}
        </div>
        
                
    )
}
export default ProductDetails;