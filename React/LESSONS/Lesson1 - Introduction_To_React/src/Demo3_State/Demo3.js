import { useState } from "react";

function Demo3Comp() {

  const [counter, setCounter] = useState(0);

  const [name, setName] = useState("Ron");
  const [age, setAge] = useState(20);

  const [address, setAddress] = useState({ city : "Haifa" , street : "Herzel" })

  const [car, setCar] = useState("")

  const changeData = () =>
  {
    setName("Ronen");
    setAge(30);
    setAddress({...address, city : "Tel Aviv"})
  }

  const increment = () =>
  {
    setCounter(counter+1);

    console.log(counter);
  }

  return (
    <div className="App">

     <button onClick={changeData}>Change Data</button>  <br/>

     <button onClick={increment}> + </button> <br/>
     {counter}  <br/>

    Name : {name} <br/>
    Age : {age} <br/> 
    City : {address.city} <br/>


    Car : <input type="text" onChange={e => setCar(e.target.value)} /> <br/>
    {car}

     

    </div>
  );
}

export default Demo3Comp;
