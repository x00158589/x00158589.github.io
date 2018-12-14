$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
      function functionA() {
    if(document.getElementById('aId1').innerText == "Show more") document.getElementById('aId1').innerText = "Show less" 
    else document.getElementById('aId1').innerText = "Show more"
}