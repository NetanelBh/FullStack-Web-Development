import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div style={{ backgroundColor: 'blue', width: '400px', height: '400px' }}>
      <h1>Products Page</h1>
      <Link to='/products/1/Watch'>Watch</Link> <br />
      <Link to='/products/2/TV'>TV</Link> <br />
      <Link to='/products/3/Lamp'>Lamp</Link> <br />
    </div>
  );
};

export default Products;
