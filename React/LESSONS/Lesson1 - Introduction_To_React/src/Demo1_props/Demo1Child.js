

function Demo1ChildComp(props) {


  return (
    <div className="App">
      
      <h3>Child Comp</h3>

      Name : {props.name} <br/>
      Age : {props.age} <br/>
      City : {props.address.city} <br/>
      Street : {props.address.street} <br/>

      <h3>Child Footer</h3>


    </div>
  );
}

export default Demo1ChildComp;
