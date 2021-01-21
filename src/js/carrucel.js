export function carrucelVent() {
   
    var owl = $('.owl-carousel');
owl.owlCarousel({
loop:true,
  nav:true,
 
   navText: [
     '<i class="fas fa-angle-left"></i>',
     '<i class="fas fa-angle-right"></i>'
  ],
autoplay:true,
autoplayTimeout:1000,
autoplayHoverPause:true,
margin: 15,

  responsive: {
    0 : {
      items: 1
    },
    768 : {
      items: 1
    },
    992 : {
      items: 2
    },
    1200:{
      items:3
    }
  }
})

}