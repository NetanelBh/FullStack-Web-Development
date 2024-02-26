
function Demo2Comp() 
{

  const getText = (e) =>
  {
    console.log(e.target.value)
  }


  const sayHello = () =>
  {
    alert("Hello");
  }

  const getCheck = (ev) =>
  {
    console.log( ev.target.checked);
  }

  return (
    <div className="App">


      <input  onChange={getText} type="text" /> <br/>

     <button onClick={sayHello}>Click Me</button> <br/>


    <input type="checkbox" onChange={getCheck} />
    

    </div>
  );
}

export default Demo2Comp;
