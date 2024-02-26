const getProducts = async () => {
  const accessToken = sessionStorage["token"];
  const url = "http://localhost:3001/products";

  // Send the token to products controller to check if the token is valid
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "x-access-token": accessToken,
      "Content-Type": "application/json",
    },
  });

  const products = await resp.json();
  const list = document.getElementById("products");
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerText = product.name;
    list.appendChild(li);
  })
};
