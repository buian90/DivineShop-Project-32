const menu = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menu.addEventListener("click", function(){
    menu.classList.toggle("change");
    body.classList.toggle("change-body");
})
