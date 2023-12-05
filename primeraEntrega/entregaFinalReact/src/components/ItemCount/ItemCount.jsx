import { useEffect, useState } from "react"
import { Button } from "../Button/Button";

export const ItemCount = () => {
const [count,setCount] = useState(0);


const handleReset = ()=> {
            setCount(0);
    };

    useEffect(()=> {
        console.log("...");
    }, []);
  return (
    <>
     <Button onClick={handleReset}>Vaciar el carrito</Button>
  </>
  )
};
