console.log("The script.js file has been invoked!");

const inactiveButtonBackgroundColor = document.querySelector("#showLogin").style.backgroundColor;
document.querySelector("#showLogin").style.backgroundColor = "#4341FE";

/* #showRegister */
document.querySelector("#showLogin").addEventListener("click", function (){
    this.style.backgroundColor = "#4341FE";
    document.querySelector("#loginForm").classList.add("active");
    document.querySelector("#showRegister").style.backgroundColor = inactiveButtonBackgroundColor;
    console.log("hello from showLogin");
    document.querySelector("#registerForm").classList.remove("active");
});

document.querySelector("#showRegister").addEventListener("click", function(){
    this.style.backgroundColor = "#4341FE";
    document.querySelector("#showLogin").style.backgroundColor = inactiveButtonBackgroundColor;
    document.querySelector("#registerForm").classList.add("active");
    console.log("hello from showregister");
    document.querySelector("#loginForm").classList.remove("active");
});