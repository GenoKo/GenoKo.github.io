$(window).bind('scroll',function(e){
    parallaxScroll();
});



    

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
    $('.frisk').css('top',(800-(scrolled*.9))+'px');

    $('.papyrus').css('top',(600-(scrolled*.4))+'px');
    $('.sans').css('top',(1000-(scrolled*.6))+'px');

    $('.papyrus').css('rotate',(0+(scrolled*.4))+'deg');
    $('.sans').css('rotate',(0-(scrolled*.6))+'deg');

    $('.layer-1').css('top',(0-(scrolled*.25))+'px');
    $('.layer-2').css('top',(0-(scrolled*.5))+'px');
    $('.layer-3').css('top',(0-(scrolled*.6))+'px');


   if (scrolled > 1200) {
        $('.flowey').css('opacity', 0.1 + scrolled*.0005);
    }
}



$(document).one('click scroll keydown', function() {
    var played = false;
    
    var audio = document.getElementById('background-music');
    audio.volume = 0.1;

    if(!played){

        audio.play();
        played = true;
    }

})
