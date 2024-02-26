const login = async () => {
  const loginData = {
    email: document.getElementById('username').value,
    password: document.getElementById('password').value
  };

  try {
    const url = 'http://localhost:3001/auth/login';
    const resp = await fetch(url, {
      method: 'POST',
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginData)
    });
    
    const data = await resp.json();
    // Only if we succeed to get the data from DB without any access faulures
    if (data.success) {
      // Save the token in the session (in browser) to check it in other pages
      sessionStorage['token'] = data.content;
      location.href = './products.html';
    } else {
      console.log(data.content);
    }
  } catch (error) {
    console.log(error);
  }
};