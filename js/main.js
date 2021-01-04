$(function(){
    $('.aside ul li').not('.active').hover(
        function(){
            $(this).css("padding-left","40px").children().css("color"," rgb(67 , 61 , 154)");
        },
        function(){
            $(this).css("padding-left","20px").children().css("color"," #fff");
        }
    );

    // toggle testimonial users' opinions
    $('.testimonial__user').on('click',function(){
        $('.testimonial__user').removeClass('active');
        $(this).addClass('active');
        let target = $(this).data('target');
        $('.testimonial__opinion').hide();
        $(target).fadeIn(1500);
    });
});