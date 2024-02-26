carsUrl = "http://localhost:3000/cars";

// Show the cars list in the browser
const showCarsList = (cars) => {
  const list = document.getElementById("cars_list");
  cars.forEach((car) => {
    const li = document.createElement('li');
    li.innerText = `${car.id} ${car.model} ${car.year} ${car.color}`;
    list.appendChild(li);
  });
};

const getAll = async () => {
  const resp = await fetch(carsUrl);
  data = await resp.json();

  showCarsList(data);
};

const getById = async () => {
  const resp = await fetch(carsUrl + "/2");
  data = await resp.json();

  showCarsList([data]);
};

const addCar = async () => {
  const car = { id: 5, model: "Lexus", year: 2023, color: "Purple" };
  const resp = await fetch(carsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });

  const data = await resp.json();
  
  showCarsList(data);
};

const updateCar = async () => {
  const car = { id: 5, model: "Lexus", year: 2023, color: "Purple" };
  const resp = await fetch(carsUrl + "/2", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });

  const data = await resp.json();
  
  showCarsList(data);
};

const deleteCar = async () => {
  const resp = await fetch(carsUrl + "/3", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  const data = await resp.json();
  
  showCarsList(data);
};
