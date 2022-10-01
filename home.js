// const toggleButton = document.getElementsByClassName('bi bi-list')[0]
// const navbarLinks = document.getElementsByClassName('btns-mobile')[0]


// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })


const hamburger = document.querySelector(".bi");
const navMenu = document.querySelector(".btns-mobile");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup")
}

//Fecthing API for shortened URL

const selectElement = (selector) =>{
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Cannot find the element ${selector}`);


}

const form = selectElement('form');
const input = selectElement('input');
const result = selectElement('.popup-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value;
  
  shortenUrl(url);
})

async function shortenURl(url){
  try{
    const res = await fetch (`https://url-shortener-bc.herokuapp.com/api/v1/url/shorten=${url}`)
    const data = res.json();

    const newUrl = document.createElement ('.popup-input')
    newUrl.classList.add('p-input');
    newUrl.innerHTML = `
    <input type="text" class="p-input" id="popup-in" ${data.result.short_link}>
    
    <button type="button" class="copy"><i class="bi bi-clipboard"></i>copy</button>
    `;

    result.prepend(newUrl);
    const copyBtn = document.querySelector('.copy');
    copyBtn.addEventListener('click', () =>{
      navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);

    });
    input.value = ""
  } catch (error) {
    console.log(error)
  }
}

