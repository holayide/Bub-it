/*const register = document.getElementById("myform")
const submitBtn = document.querySelector('.send')

const handleSubmit = (e) => {
  e.preventDefault();
  var userName =document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
    
 fetch("https://url-shortener-bc.herokuapp.com/api/v1/users/signup", {
    method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userName: userName,
            email: email,
            password:password,
        }), 
    })
     .then((res) => {
        return res.json();
    })
    .then((data) =>{
      if (data != null ) {
        window.location.href = '/login.html'
      }
      console.log(data);
    })
    .catch((err) => console.log(err));
}

submitBtn.addEventListener('click', (e) => handleSubmit(e))*/


const form = document.getElementById("myform");
    form.onsubmit = (e) => {
    e.preventDefault();
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("https://url-shortener-bc.herokuapp.com/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
        }),

    })

    .then((res) => {
        return res.json();
    } )
    .then((data) => { 
        if (data != 'null') {
            window.location.href = './login.html'
        }
        console.log(data);
    })    
    .catch((err) => console.log(err));
}  
