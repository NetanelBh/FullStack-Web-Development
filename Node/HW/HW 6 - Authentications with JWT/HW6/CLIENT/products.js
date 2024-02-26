async function addProductsToTable(products) {
  const table = document.getElementById("table");

  products.forEach((prod) => {
    const prodTr = document.createElement("tr");
    const prodTdName = document.createElement("td");
    const prodtdPrice = document.createElement("td");
    const prodtdEdit = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";

    editButton.onclick = () => {
      sessionStorage.setItem("prodData", JSON.stringify(prod));

      window.location.href = "./addOrUpdate.html";
    };

    prodtdEdit.appendChild(editButton);

    prodTdName.innerText = prod.name;
    prodtdPrice.innerText = prod.price;
    prodTr.appendChild(prodTdName);
    prodTr.appendChild(prodtdPrice);
    prodTr.appendChild(prodtdEdit);

    table.appendChild(prodTr);
  });
}

async function getProducts() {
  const name = sessionStorage.getItem("name");

  document.getElementById("name").innerText = name;

  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "./login.html";
  }

  try {
    const resp = await fetch("http://localhost:8000/products", {
      method: "GET",
      headers: { "x-access-token": token },
    });
    const products = await resp.json();
    addProductsToTable(products);
  } catch (e) {
    console.log(e.message);
  }
}
