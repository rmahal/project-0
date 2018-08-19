$(document).ready(function() {

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    // options
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




    // var abtflx = document.qer
    // var nystories = document.querySelector("#aboutFlex").offsetTop;
    // window.onscroll = function() {
    //     if (window.pageYOffset > 0) {
    //         var opac = (window.pageYOffset / nystories);
    //         console.log(opac);
    //         nystories.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url('../img/megmanstage.png') no-repeat";
  
    //     }
    // }


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


    
});