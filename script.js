$(window).bind('scroll',function(e){
    parallaxScroll();
});



    

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
    $('.frisk').css('top',(800-(scrolled*.9))+'px');

    $('.layer-1').css('top',(0-(scrolled*.25))+'px');
    $('.layer-2').css('top',(0-(scrolled*.5))+'px');
    $('.layer-3').css('top',(0-(scrolled*.6))+'px');


   if (scrolled > 1200) {
        $('.flowey').css('opacity', 0.1 + scrolled*.0005);
    }
}


//testing playing audio files lol
$(document).ready(function() {
    var audio = document.getElementById('background-music');
    var played = false;
    audio.volume = 0.1;

    if (!played){
    // Try to play immediately
        audio.play().catch(function(error) {
        console.log('Autoplay prevented. Playing on first user interaction.');

            // Play after first user interaction
            $(document).one('click scroll keydown', function() {
                audio.play();
                
            })
        })

        played = true;
    }



})