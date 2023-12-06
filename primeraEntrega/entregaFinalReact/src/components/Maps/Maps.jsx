import { useEffect, useState } from "react";
import { getProducts } from "../../productMock";
import { Cards } from "../Cards/Cards.jsx";

export const Maps = () => {

    const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState (true);
useEffect(() => {
    getProducts()
    .then( resp => {{
        console.log(resp)
        setProducts(resp)
        setIsLoading(!isLoading)
}} )
    .catch(error => console.log(error))
}, [])
  return (
    <div>
    
   {
           isLoading ? <h3>Cargando productos...</h3>:
       products.map( product  => <Cards key ={product.id} name={product.name}description={product.description} stock={product.stock}/> )
    }
     </div>
    )
}
