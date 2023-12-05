

const products = [
    {id: "1", name: "lilas", description: "arreglo floral de lilas", stock:5},
    {id: "2", name: "rosas", description: "arreglo floral de rosas", stock:7},
    {id: "3", name: "helechos", description: "maceta con helecho", stock:10},
    {id: "4", name: "palmas", description: "maceta con palmas", stock:8},
  ];
  export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
      if(products.length > 0) {
        setTimeout(()=> {
            resolve(products)
        }, 1000)
    } else {
        reject ("No hay productos")
      }
  })
  }