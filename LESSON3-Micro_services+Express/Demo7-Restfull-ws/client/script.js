const getData = async () => {
  // To enable it from client, install cors module and import from index.js
  // Then, add the "app.use(cors())"
  const resp = await fetch("http://localhost:3000/persons");
  const data = await resp.json();
  console.log(data);
};