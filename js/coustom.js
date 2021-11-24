
  $(".ourProduct").owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    margin: 0,
    autoplay: true,
    nav: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navigation: true,
    navText:false,
    navText: [
        "<i class='far fa-arrow-alt-circle-left'></i>",
        "<i class='far fa-arrow-alt-circle-right'></i>",
      ],
    responsive: {
      0: {
        items: 1,
        dots: false,
        loop: false,
        nav: true,
      },
      310: {
        items: 1,
        dots: false,
        loop: true,
        nav: false,
        slideBy: 1,
      },
      766: {
        items: 2,
        dots: false,
        loop: true,
        nav: false,
        slideBy: 2,
      },
      991: {
        items: 3,
        dots: false,
        loop: true,
        nav: false,
        slideBy: 1,
      },
    },
  });


  
  $(".Priceing").owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    margin: 0,
    autoplay: true,
    nav: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navigation: true,
    navText:false,
    navText: [
        "<i class='far fa-arrow-alt-circle-left'></i>",
        "<i class='far fa-arrow-alt-circle-right'></i>",
      ],
    responsive: {
      0: {
        items: 1,
        dots: false,
        loop: false,
        nav: true,
      },
      310: {
        items: 1,
        dots: false,
        loop: true,
        nav: false,
        slideBy: 1,
      },
      766: {
        items: 2,
        dots: false,
        loop: true,
        nav: false,
        slideBy: 2,
      },
      991: {
        items: 3,
        dots: false,
        loop: true,
        nav: false,
        slideBy: 1,
      },
    },
  });




  $(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $("body").toggleClass("f");
      $(".humberger__menu__overlay").toggleClass("active");
    });
  });

  $(document).ready(function(){
    $(".msp-close").click(function(){
      $("body").toggleClass("f");
      $(".msp-nave-add-classs").removeClass("show");
      $(".humberger__menu__overlay").removeClass("active");
    });
  });

  $(".humberger__menu__overlay").on('click', function () {
    $(".msp-nave-add-classs").removeClass("show");
    $(".humberger__menu__overlay").removeClass("active");
    $("body").removeClass("f");
});


// $(document).ready(function(){
//   $(".img-Befor").fadeIn(1000);
//   $(".img-After").fadeOut(1000);
//   $(".item-show .card-item").hover(function(){
//     $(".card-item-image .img").fadeToggle(1000);
//     $(".img-After").fadeToggle(1000);
//     $(".img-Befor").fadeToggle(1000);
//   });
// });