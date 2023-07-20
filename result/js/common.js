jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });




//levels menu
  let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

  let body = document.querySelector('body');


  if ( isMobile.any() ) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.menu-arrow');
    arrow.forEach(function (item) {
      let thisLink = item.previousElementSibling;
      let subMenu = item.nextElementSibling;
      let thisArrow = item;

      thisLink.classList.add('parent');
      item.addEventListener('click', function () {      
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    });
  }
  else {
    body.classList.add('mouse')
  }


  $('.th-sort').click(function () {
    $(this).toggleClass('active');
  })



/*  $('.popular__slider').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: true,
    pauseOnHover: true,  
  });*/
/*
   $('.platforms__slider').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: true,
    pauseOnHover: true,  
  });*/



  if ( $('.platforms__slider').length ) {
    new Swiper('.platforms__slider', {

      scrollbar: {
        el: '.swiper-scrollbar',
//перетаскивать скролл мышью
        draggable: true
      },
      slidesPerView: 3, 
      speed: 600,          
//перетаскивание на пк
      simulateTouch: true,
//чувствительность свайпа
      touchRatio: 2,
//угол срабатывания свайпа
      touchAngle: 45,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1199: {
          watchSlidesProgress: true,
          slidesPerView: 3, 
          spaceBetween: 0,
          loop: false,
        },

        200: {   
          slidesPerView: 1,           
        },
      },

    });
  }

  if ( $('.popular__slider').length ) {
    new Swiper('.popular__slider', {

      scrollbar: {
        el: '.swiper-scrollbar',
//перетаскивать скролл мышью
        draggable: true
      },
      slidesPerView: 3,
      speed: 600,
//перетаскивание на пк
      simulateTouch: true,
//чувствительность свайпа
      touchRatio: 2,      
      watchSlidesVisibility: true,
//угол срабатывания свайпа
      touchAngle: 45,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1199: {
          watchSlidesProgress: true,
          slidesPerView: 3, 
          spaceBetween: 0,
          loop: false,
        },

        200: {   
          slidesPerView: 1, 
          spaceBetween: 0,
          loop: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      },

    });
  }

  $('.show-more').click(function (e) {
    e.preventDefault();
    $(this).closest('td').find('.hide').addClass('show');
    $(this).hide();
  });

  function showHide(elem) {
    let block = $(elem);    
    var button = block.find('.toggle');
    button.html(button.data('text'));
    button.click(function(e){
      e.preventDefault();      
      let desc = $(this).prev();      
      desc.toggleClass('more');
      var swap = $(this).data('swap');
      var text = $(this).data('text');
      $(this).data('text', swap);
      $(this).data('swap', text);
      $(this).html(swap);
    });
  }

  showHide('.description');

/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");
$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/



  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link', '.modal-overlay_1', '.modal-close_1');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }


  let inputFile = document.querySelector('#fileMulti');
  let imgWrapper = document.querySelector('.addform_file-box > div');


  function download2(input) {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
/*  reader.onload = function () {    
imgWrapper.innerHTML = file.name;
}*/
    reader.onload = ev => {
      const src = ev.target.result
      imgWrapper.innerHTML = `${file.name}`
    }
  }


  if ($('#fileMulti').length) {
    inputFile.addEventListener("change", function () {
      download2(this);
    });
  }



  

  $(".video_1").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      media : {}
    }
  });


  $('.rating__star').click(function () {
    let starValue = $(this).attr('data-star-value');
    $(this).parent().attr('data-result-value', starValue);
  });

  $('.accordion-header').toggleClass('inactive-header');
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }

    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });

  return false;

}); //ready

