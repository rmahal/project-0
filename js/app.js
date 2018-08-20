$(document).ready(function() {

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    cellAlign: 'left',
    contain: true
    });


    var text = ['<p>"Raj is not only extremely knowledgeable, but is also a great teammate. He is never too busy to help out those who seek his help and does it with a smile and great sense of humor. I hope I can continue working with him on other projects!"<br> - Sofia Aguirre</p>','<p>"In the time I have come to know Raj, he has proven to be incredibly knowledgable, and above all, a good friend. He is as dependable as they come and is always willing to help work through any questions and issues that come up." <br> - Alan Duncan</p>', '<p>Raj is a great person to work with because he has solid communication skills that allow others to understand his great ideas." <br> -Francisco Sandoval</p>'];
    var counter = 0;
    var elem = document.getElementsByClassName("fadingText");

    function change() {
        $(elem).fadeTo(10000, 0, function() {
            this.innerHTML = text[counter];
            counter = ++counter % text.length;
            $(this).fadeTo(10000, 1, change)
        })
    }

    change()



    $(window).bind("scroll", function(event) {        
        $("#aboutFlex").each(function() {
          $(this).css('background-image','url("../img/megmanstage.png")').fadeIn();
        });
    });



    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    var modal = document.getElementById('modalOne');
    var imgOne = document.getElementById('kirby');
    var modalImg = document.getElementById("kirb1");
    imgOne.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }



});