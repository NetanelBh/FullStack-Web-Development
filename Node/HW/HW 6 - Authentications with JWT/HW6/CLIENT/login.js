const login = async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const url = "http://localhost:3001/auth/login";

  try {
    const resp = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    })

    // Could be either the error or the token
    const data = await resp.json();

    // If not authorized
    if (!resp.ok) {
      console.log(data);
    }
	
    sessionStorage.setItem('token', data);
    sessionStorage.setItem('name', username);

    location.href = './products.html';
  } catch (error) {
    console.log(error);
  }
};