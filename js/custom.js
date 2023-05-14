$('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow:".next",
    prevArrow:".prev",
});
 
 
$('.data-slick').slick({
    dots: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow:".next",
    prevArrow:".prev",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          nextArrow:false,
          prevArrow:false,
      
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

   // ===========side manu =========
    // let side_manu_btn = document.querySelector(".side_manu_btn")
    // side_manu_btn.addEventListener("click",function(){
    //     $(".side_manu").addClass("open");
    // })
    $(".side_manu_btn").click(function(){
      $(".side_manu").addClass("open");
    });
    $(".ext_btn").click(function(){
      $(".side_manu").removeClass("open");
    });

    $('.multiple-items').slick({
      infinite: true,
      nextArrow:false,
      prevArrow:false,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
    $('.insta-main').slick({
      infinite: true,
      nextArrow:false,
      prevArrow:false,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 6,
    });
    $('.logo-block-main').slick({
      infinite: true,
      nextArrow:false,
      prevArrow:false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 5,
    });