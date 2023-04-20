let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }
        else{
            document.querySelector('.header').classList.remove('active');
        }

    }
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    loop:true,
    centeredsliders:true,  
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
   
  });

  
var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,  
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesperView: 3,
        },
      },
   
  });


//   trainers

  
var swiper = new Swiper(".trainer-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,  
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesperView: 3,
        },
      },
   
  });

//   blogs


var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,  
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesperView: 3,
        },
      },
   
  });
 

  //ijihshufh
//   var swiper =new Swiper(".card_slider",{
//     slidePerView:3,
//     spaceBetween:30,
//     pagination:{
//         el:".swiper-pagination",
//         clickable:true,
//     },

//   });