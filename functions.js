$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    
    $('.logo').css({
        'transform' : 'translate(0,' + wScroll /2 + '%'
    });

    $('.back-bird').css({
        'transform' : 'translate(0,' + wScroll /4 + '%'
    });

    $('.fore-bird').css({
        'transform' : 'translate(0, - ' + wScroll/50 + '%'
    });

    var clothesPicsTop = $('.clothes-pics').offset().top;
    
    var wHeight = $(window).height();
    if(wScroll > clothesPicsTop - (wHeight / 1.2 )){//look how for is the clothes-pics container from the top of the dom
        $('.clothes-pics figure').each(function(i){

            setTimeout(function(){
                $('.clothes-pics figure').eq(i).addClass('is-showing');
            }, 180 * (i+2));
            
        });
    }
    else if( wScroll > clothesPicsTop*2) {
        $('.clothes-pics figure').removeClass('is-showing');
    }
 console.log(clothesPicsTop)
    
    var largeWindowTop = $('.large-window').offset().top;
        if(wScroll > clothesPicsTop+ $('.clothes-pics').height()){
            $('.large-window').css({
                'background-position':'center' + (wScroll - largeWindowTop) + 'px'
            });

var opacity = (wScroll - largeWindowTop + 400) / (wScroll/5)

        $('.window-tint').css({
            'opacity' : opacity
        })
    }
//posts
var blogPostTop = $('.blog-posts').offset().top;
var offset = Math.min(0, wScroll - blogPostTop + wHeight - 450);
if(wScroll > blogPostTop - wHeight){
    $('.post').fadeIn(2500);
$('.post-1').css({
    'transform': 'translate(' + offset +'px,'+ Math.abs(offset * 0.3) + 'px',
    'transition' :'transform 0.1s ease-in-out'
});
$('.post-2').css({
    'transform': 'translate( 0px, '+ Math.abs(offset) + 'px)',
    'transition' :'transform 0.2s ease-in-out'
});
$('.post-3').css({
    'transform': 'translate(' + Math.abs(offset) +'px, '+ Math.abs(offset * 0.5) + 'px)',
    'transition' :'fransform 0.3s ease-in-out'
});

}

});