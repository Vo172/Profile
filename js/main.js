$(document).ready(function () {
  // --- Preload
  $(window).on('load', function () {
    $('#preloader').fadeOut(1000, function () {
      $(this).remove();
    });
  });
  // --- SET click btn menu
  $(".border_btn").click(function () {
    if ($("header").css("width") == "0px") {
      $(window).width() > 768 ? $("header").css("width", "300px") : $("header").css("width", "250px");
      $(window).width() > 768 ? $(".ss_home").css("padding-left", "300px") : $("padding-left").css("width", "250px");
      $(".tag").addClass("humb");

    }
    else {
      $("header").css("width", "0px");
      $(".tag").removeClass("humb");
    }
  });

  var body = $("body");
  var top = body.scrollTop();
  if (top != about) {
    body.animate({ scrollTop: about }, '500');
  }
  // SET active menu 
  $(".nav_item").click(function () {
    $(".nav_item").removeClass("active");
    $(this).addClass("active");
    if ($("header").css("width") !== "0px" && $(window).width() < 1024) {
      $("body").css("position", "relative"),
        $("header").css("width", "0px");
      $(".tag").removeClass("humb");
    }
  })
  // SET duration when click
  $(".nav_item").click(function () {
    let about = $(".ss_about").offset().top;
    let home = $(".ss_home").offset().top;
    if ($(this).val() == '1') {
      body.animate({ scrollTop: home }, '500');
      addHome();
      removeAboutLeft();
      removeAboutRight();
    }
    if ($(this).val() == '2') {
      body.animate({ scrollTop: about }, '500');
      removeHome();
      addAboutLeft();
      addAboutRight();
    }
  });

  // SET duration when scroll and animate
  addHome();
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    let about = $(".ss_about").offset().top;
    let home = $(".ss_home").offset().top;
    let top = $(".top").offset().top;

    if (top <= about - 100) {
      $(".nav_item").removeClass("active animated flipInX");
      $(".nav_home").addClass("active");
      $(".nav_home").addClass("active animated flipInX");
    }
    else if (top >= about - 100) {
      $(".nav_item").removeClass("active animated flipInX");
      $(".nav_about").addClass("active animated flipInX");
    }
    if (top <= about - about / 2) {
      addHome();
      removeAboutLeft();
      removeAboutRight();
    }
    else if (top >= about - about / 2) {
      removeHome();
      addAboutLeft();
      if ($(window).width() < 768){
        if(top >= about - about / 2 + 504)
          addAboutRight();
      }
      else{
        addAboutRight();
      } 
    }
  }
  function addHome() {
    $(".h3").addClass("animated bounceInDown");
    $(".p").addClass("animated delay-1s bounceInLeft");
    $(".btn_home").addClass("animated delay-2s rotateIn");
  }
  function removeHome() {
    $(".h3").removeClass("animated bounceInDown");
    $(".p").removeClass("animated delay-1s bounceInLeft");
    $(".btn_home").removeClass("animated delay-2s rotateIn");
  }
  function addAboutLeft() {
    $(".info").addClass("animated fadeInLeft");
  }
  function addAboutRight() {
    $(".txt-info").addClass("animated fadeInRight");
  }
  function removeAboutLeft() {
    $(".info").removeClass("animated fadeInLeft");
  }
  function removeAboutRight() {
    $(".txt-info").removeClass("animated fadeInRight");
  }
});
