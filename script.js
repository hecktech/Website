const nav=document.querySelector('.navdiv')
const loginMain=document.querySelector(".loginMain");
const loginLink=document.querySelector(".login-link");
const registerLink=document.querySelector(".register-link");
const loginDisplay=document.querySelector(".login")
const registerDisplay=document.querySelector(".Register")


//load navbar
fetch('./navbar.html')
.then(res=>res.text())
.then(
    data=>{
        nav.innerHTML=data
    }
)
//set default state for login to be active
document.addEventListener("DOMContentLoaded",()=>{
    loginMain.classList.remove("active");
    loginDisplay.classList.remove("active")
    registerDisplay.classList.add("active")
})

//toggle between login and register
registerLink.addEventListener("click",()=>{
    loginMain.classList.add("active");
   loginDisplay.classList.add("active")
   registerDisplay.classList.remove("active")
   
    
})
loginLink.addEventListener("click",()=>{
    loginMain.classList.remove("active");
    loginDisplay.classList.remove("active")
    registerDisplay.classList.add("active")
   
})
