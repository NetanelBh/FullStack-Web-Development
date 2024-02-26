import { useState } from "react";

import "./Demo4.css"


function Demo4Comp() {

  const [isRed, setIsRed] = useState(true)
  const [isVisible, setIsVisible] = useState(false)



  return (
    <div className="App">

    <button onClick={ () => setIsRed(!isRed) }>Change Color</button>

      <h1 style={{ color : isRed? "red" : "blue" }}>Hello World</h1>


      <button onClick={ () => setIsVisible(!isVisible) }>Hide/Show</button>


      <h1 className={ isVisible? "show" : "hide" }>Hello World 2</h1>

     

    </div>
  );
}

export default Demo4Comp;
