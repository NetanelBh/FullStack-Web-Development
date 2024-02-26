import { useState } from "react";

function Demo6Comp() {

  const [colors, setColors] = useState(["red","green","blue"])

  const [products, setProducts] = useState([{name : "PC" , price : 100},
                                            {name : "Tablet" , price : 150},
                                            {name : "Watch" , price : 70}])

  const addColor = () =>
  {
    setColors([...colors, "Yellow"])
  }

  return (
    <div className="App">


      <table border={1}>
        <tr><th>name</th><th>Price</th></tr>
        <tbody>

        {
          products.map((x,index) =>
            {
              return <tr key={index}>
                <td>{x.name}</td>
                <td>{x.price}</td>
              </tr>
            })
        }

        </tbody>
      </table>

<button onClick={addColor}>Add Color</button>

      <ul>
        {
          colors.map((x,index) =>
            {
              return <li  key={index} >{x}</li>
            })
        }
      </ul>

     

    </div>
  );
}

export default Demo6Comp;
