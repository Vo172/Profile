$(document).ready(function () {
  // --- Preload
  
  $(window).on('load', function () {
      $('#preloader').fadeOut(2000, function () {
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
      $("body").css("position","relative"),
      $("header").css("width", "0px");
      $(".tag").removeClass("humb");
    }
  })
  // SET duration when click
  $(".nav_item").click(function () {
    let about = $(".ss_about").offset().top;
    let home = $(".ss_home").offset().top;
    if($(this).val() == '1'){
      body.animate({ scrollTop: home }, '500');
    }
    if($(this).val() == '2'){
      body.animate({ scrollTop: about }, '500');
    }
  });

  // SET duration when scroll
  window.onscroll = function() {scrollFunction()};
  function scrollFunction(){
    let about = $(".ss_about").offset().top;
    let home = $(".ss_home").offset().top;
    let top = $(".top").offset().top;
    console.log( about + '-' + home + '-' + top)
    if(top <= about - 100){
      $(".nav_item").removeClass("active");
      $(".nav_home").addClass("active");
    }
    else if(top >= about - 100){
      $(".nav_item").removeClass("active");
      $(".nav_about").addClass("active");
    }
  }
});
