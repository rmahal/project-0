

$(document).ready(function() {

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true
    });


    var text = ['"Raj is not only extremely knowledgeable, but is also a great teammate. He is never too busy to help out those who seek his help and does it with a smile and great sense of humor. I hope I can continue working with him on other projects!"<br> - Sofia Aguirre', "Two", 'Raj is a great person to work with because he has solid communication skills that allow others to understand his great ideas." <br> -Francisco Sandoval'];
    var counter = 0;
    var elem = document.getElementsByClassName("fadingText");

    function change() {
        $(elem).fadeTo(3000, 0, function() {
            this.innerHTML = text[counter];
            counter = ++counter % text.length;
            $(this).fadeTo(3000, 1, change)
        })
    }

    change()

    
});