import { useState } from "react";


function Demo5Comp() {


 const [isExist, setIsExist] = useState(false);

  return (
    <div className="App">

    <button onClick={ () => setIsExist(!isExist)} >Create/Delete</button>

      {
        isExist && <h1>Hello Again</h1>
      }

      {
        isExist?  <h1>Hello Again</h1> : null
      }
    
     

    </div>
  );
}

export default Demo5Comp;
