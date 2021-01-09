$(function(){
    $('.aside ul li').not('.active').hover(
        function(){
            $(this).css("padding-left","40px").children().css("color"," rgb(67 , 61 , 154)");
        },
        function(){
            $(this).css("padding-left","20px").children().css("color"," #fff");
        }
    );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});