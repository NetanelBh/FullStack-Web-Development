import Demo1ChildComp from "./Demo1Child";


function Demo1ParentComp() {
  return (
    <div className="App">
      
      <h1>Parent Comp</h1>

      <Demo1ChildComp  address={ {city : "Haifa" , street : "Herzel"}  }    name="Avi"   age={20} />


      <h1>Parent Footer</h1>


     

    </div>
  );
}

export default Demo1ParentComp;
