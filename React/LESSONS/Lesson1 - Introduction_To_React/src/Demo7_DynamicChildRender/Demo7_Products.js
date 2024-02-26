import { useState } from "react";
import Demo7_ProductComp from "./Demo7_Product";

function Demo7_ProductsComp() {

  const [products, setProducts] = useState([{name : "PC" , price : 100},
                                            {name : "Tablet" , price : 150},
                                            {name : "Watch" , price : 70}])


  return (
    <div style={{ width : "300px", border:"solid 3px red"}}>

    
      <h3>Products</h3>

      {
        products.map((prod,index) =>
        {
          return <Demo7_ProductComp key={index} prodData={prod} />
        })
      }

     

    </div>
  );
}

export default Demo7_ProductsComp;
