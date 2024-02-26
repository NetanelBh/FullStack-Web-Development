import { useState } from "react";


function Ex1Comp() {

  const[num, setNum] = useState(0);
  const[total, setTotal] = useState(0);

  const add = () =>
  {
    setTotal(total + num);
  }

  
  return (
    <div className="App">


      <input type="text" onChange={e => setNum(+e.target.value)} />
      <button onClick={add}>+</button>  <br/>

      Total : {total}

     

    </div>
  );
}

export default Ex1Comp;
