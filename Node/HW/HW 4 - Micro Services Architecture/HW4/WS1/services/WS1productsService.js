const ordersRep = require("../repositories/ordersFileRep");
const productsRep = require("../repositories/productsWSRep");

const getProducts = async () => {
  // TODO: understand why it's not read the json file
  const { orders } = await ordersRep.GetAllOrders();
  const {data: products} = await productsRep.getProducts();

  const finalData =  products.map(product => {
    const order = orders.find(order => order.productId === product.id);
    if (order) {
      return {...product, orders: order};
    }
    
    return {...product, orders: {}};
  });

  return finalData;
};

module.exports = { getProducts };
