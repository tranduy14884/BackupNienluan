$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        smartSpeed: 1500,
        animateIn: 'linear',
        animateOut: 'linear',

        autoplay:true,
        autoplayTimeout: 5000,
        
        autoWidth:false,
        nav:true,
        navText : ['<i class="fas fa-chevron-circle-left"></i>','<i class="fas fa-chevron-circle-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
                loop:false
            }
        }
    })
});