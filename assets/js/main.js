$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      autoplay: false,
      autoplayTimeout: 3000,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          300: {
            items: 1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })    
});

// Open Popup
// b1: Truy cap vao phan tu
// let icPopup = document.querySelector(".icon-popup");
// console.log(iconPopup);

// b2: add 1  DOM Event
// icPopup.addEventListener("click", function hanldePopup(){
//   // alert("ban dam bam vao toi!");
//   document.querySelector(".content-popup").style.display = "block";
// });


// // Close Popup
// let icClose = document.querySelector(".close");
// console.log(icClose);

// icClose.addEventListener("click", function handleClose(){
//   document.querySelector(".content-popup").style.display = "none";
// })



// B1: Truy cap vao phan tu

let icPopup = document.querySelector(".icon-popup");
// console.log(icPopup);

icPopup.addEventListener('click', function handlePopup(){
  
  let wrapPopup = document.querySelector(".wrap-popup");
  console.log(wrapPopup);
  wrapPopup.classList.toggle("popup-frontend-32");

})

