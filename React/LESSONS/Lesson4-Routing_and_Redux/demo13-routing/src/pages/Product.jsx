import { useParams } from 'react-router-dom';

const Product = () => {
  const { id, name } = useParams();

  return (
    <div style={{ backgroundColor: 'cyan', width: '400px', height: '400px' }}>
      <h1>{name} Page</h1>
      ID: {id}
    </div>
  );
};

export default Product;
