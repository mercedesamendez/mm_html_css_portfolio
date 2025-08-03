const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const emailForm = document.querySelector("#email-form");

// Hamburger Menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Email
function sendMail(e){
    e.preventDefault()
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_vlit3sn", "template_lvgobeo",parms).then(alert("Your email has been sent!"))
}
emailForm.addEventListener("submit", sendMail);