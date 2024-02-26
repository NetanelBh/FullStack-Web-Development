
function Demo7_ProductComp(props) {




  return (
    <div style={{ width : "200px", border:"solid 2px blue"}}>

    
      <h4>Product Data</h4>

      Name : {props.prodData.name} <br/>
      Price : {props.prodData.price}

     

    </div>
  );
}

export default Demo7_ProductComp;
