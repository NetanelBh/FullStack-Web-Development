const RowTable = (props) => {
  return <tbody>
    {props.products.map((product) => {
      return <tr key={product.name}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.color}</td>
      </tr>
    })}
  </tbody>
};

export default RowTable;