const login = document.getElementById("loginForm");
    login.onsubmit = (e) => {
    e.preventDefault();
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("https://url-shortener-bc.herokuapp.com/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        email: email,
        password: password,
        }),

    })

    .then((res) => {
        return res.json();
    } )
    .then((data) => { 
        if (data.status == 'success') {
            window.location.href = './myurl.html'
        }
        console.log(data);
    })    
    .catch((err) => console.log(err));
}  