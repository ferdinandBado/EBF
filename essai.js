/* Pour le smooth scrolling------------------------------------------*/
$(document).ready(function(){
    // quand un lien du menu est cliqué
    $("#menu a").on("click", function(event){
        //empecher le comportement par defaut defilement instantane
        event.preventDefault();

        // recuperer l'id de la section cible

        let target = $(this).attr("href");

        // defilement anime

        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 700);
    });
});


// Pour le defilement avec les element apparaissant dynamiquement

$(window).on("scroll", function(){
    $(".defile").each(function(){
        var elementTop = $(this).offset().top;
        var topp = $(window).scrollTop()+$(window).height();
        if (elementTop < topp -30){
            $(this).addClass("visible");
        }
    })
});








/*carousel du l'accueil--------------------------------------------------------------------------------------  */
$(document).ready(function(){
    var images1 = ["img/sal.jpg",
        "img/chair-1840011_640.jpg",
        "img/lit.jpg", "img/f_r.jpg"];

    var index1 = 0;

    function changeBackground1(){
        $(".carousel-container1").css("background-image", "url('" + images1[index1] + "')");

        index1 = (index1 + 1) % images1.length;
    }

    setInterval(changeBackground1, 2000);

    changeBackground1();
});

/* Pour les projets-------------------------*/
/*
$(document).ready(function(){
    // definitions des images pour chaque carousels

    var carousels = {
        1:["img/sal.jpg", "img/chair-1840011_640.jpg",  "img/lit.jpg"],
        2:["img/sal.jpg", "img/chair-1840011_640.jpg",  "img/lit.jpg"],
        3:["img/sal.jpg", "img/chair-1840011_640.jpg",  "img/lit.jpg"],
        4:["img/sal.jpg", "img/chair-1840011_640.jpg",  "img/lit.jpg"],
        5:["img/sal.jpg", "img/chair-1840011_640.jpg",  "img/lit.jpg"],
        6:["img/sal.jpg", "img/chair-1840011_640.jpg",  "img/lit.jpg"]
    };

    // initialisation des index pour chaque carousels

    var carouselIndexes = {
        1:0, 2:0, 3:0, 4:0, 5:0, 6:0
    };

    // fonction pour changer l'image de fond

    function changeBackground(carouselId){
        var images = carousels[carouselId];
        var index = carouselIndexes[carouselId];
        var $carousel = $('.carousel-container[data-carousel="' + carouselId + '"]');

        //changer l'image de fond
        $carousel.css("background-image", "url('" + images[index] + "')");

        // mettre a jours l'index
        carouselIndexes[carouselId] = (index + 1) % images.length;
    }

    //changer les images toutes les 3 secondes pour chaque carousel

    setInterval(function() {
        for (var i = 1; i <=6; i++) {
            changeBackground(i);
        }
    }, 3000);



    // appliquer l'image inital a tous les carousels
    for (var i = 1; i <=6; i++) {
        changeBackground(i);
    }
});
*/

/* premiere image du projet*/
$(document).ready(function(){
    var images2 = ["img/faut.jpg",
        "img/faut1.jpg",
        "img/faut2.jpg"];

    var index2 = 0;

    function changeBackground2(){
        $(".carousel-container2").css("background-image", "url('" + images2[index2] + "')");

        index2 = (index2 + 1) % images2.length;
    }

    setInterval(changeBackground2, 3000);

    changeBackground2();
});

/*deuxieme image du projets*/
$(document).ready(function(){
    var images3 = ["img/litfin-ferdi.jpg",
        "img/lit-f.jpg", "img/litfi.jpg"];

    var index3 = 0;

    function changeBackground3(){
        $(".carousel-container3").css("background-image", "url('" + images3[index3] + "')");

        index3 = (index3 + 1) % images3.length;
    }

    setInterval(changeBackground3, 5000);

    changeBackground3();
});

/* troisieme image du projet*/
$(document).ready(function(){
    var images4 = ["img/foo.jpg",
        "img/foo1.jpg","img/a3.jpg"];

    var index4 = 0;

    function changeBackground4(){
        $(".carousel-container4").css("background-image", "url('" + images4[index4] + "')");

        index4 = (index4 + 1) % images4.length;
    }

    setInterval(changeBackground4, 3000);

    changeBackground4();
});

/*quatrième image projet-----------*/
$(document).ready(function(){
    var images5 = ["img/lit3.jpg",
        "img/lit4.jpg","img/lit5.jpg"];

    var index5 = 0;

    function changeBackground5(){
        $(".carousel-container5").css("background-image", "url('" + images5[index5] + "')");

        index5 = (index5 + 1) % images5.length;
    }

    setInterval(changeBackground5, 5000);

    changeBackground5();
});

/*cinquieme image projet-----------*/
$(document).ready(function(){
    var images6 = ["img/ff1.jpg",
        "img/ff2.jpg", "img/ff3.jpg"];

    var index6 = 0;

    function changeBackground6(){
        $(".carousel-container6").css("background-image", "url('" + images6[index6] + "')");

        index6 = (index6 + 1) % images6.length;
    }

    setInterval(changeBackground6, 5000);

    changeBackground6();
});

/*sixieme image projet-----------*/
$(document).ready(function(){
    var images7 = ["img/litsup.jpg",
        "img/litsup11.jpg"];

    var index7 = 0;

    function changeBackground7(){
        $(".carousel-container7").css("background-image", "url('" + images7[index7] + "')");

        index7 = (index7 + 1) % images7.length;
    }

    setInterval(changeBackground7, 5000);

    changeBackground7();
});


/*huitieme image projet-----------*/
$(document).ready(function(){
    var images8 = ["img/r1.jpg",
        "img/r2.jpg", "img/r3.jpg"];

    var index8 = 0;

    function changeBackground8(){
        $(".carousel-container8").css("background-image", "url('" + images8[index8] + "')");

        index8 = (index8 + 1) % images8.length;
    }

    setInterval(changeBackground8, 5000);

    changeBackground8();
});