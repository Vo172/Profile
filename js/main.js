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
    if ($("header").css("width") !== "0px" && $(window).width() < 1024) {
      $("body").css("position", "relative"),
        $("header").css("width", "0px");
      $(".tag").removeClass("humb");
    }
  })
  
  // SET duration when click

  var home = $(".ss_home").offset().top;
  var about = $(".ss_about").offset().top;
  var resume = $(".ss_resume").offset().top;
  var skill = $(".ss_skill").offset().top;
  $(".nav_item").click(function () {
    if ($(this).val() == '1') {
      body.animate({ scrollTop: home }, '500');
    }
    else if ($(this).val() == '2') {
      body.animate({ scrollTop: about }, '500');
    }
    else if ($(this).val() == '3') {
      resume = $(window).width() > 768? resume-140 : resume;
      body.animate({ scrollTop: resume }, '500');
    }
    else if ($(this).val() == '4') {
      //resume = $(window).width() > 768? resume : 1008;
      body.animate({ scrollTop: skill }, '500');
    }
  });

  // SET duration when scroll and animate
  addHome();
  body.animate({ scrollTop: 0 }, '500');
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    // For Menu
    var top = $(".top").offset().top;
    if (top >= 0  && top+300 < about) {
      $(".nav_item").removeClass("active animated flipInX");
      $(".nav_home").addClass("active animated flipInX");
    }
    else if (top+300 >= about && top+300 < resume) {
      $(".nav_item").removeClass("active animated flipInX");
      $(".nav_about").addClass("active animated flipInX");
    }
    else if(top+300 >= resume && top+300 < skill){
      $(".nav_item").removeClass("active animated flipInX");
      $(".nav_resume").addClass("active animated flipInX");
    }
    else if(top+300 >= skill){
      $(".nav_item").removeClass("active animated flipInX");
      $(".nav_skill").addClass("active animated flipInX");
    }
    // For Main
    if (top >= 0  && top+300 < about) {
      addHome();
      removeResume();
      removeAboutLeft();
      removeAboutRight();
    }//- about / 2 = 50% view height
    else if (top+300 >= about && top+300 < resume) {
      removeHome();
      removeResume();
      addAboutLeft();
      if ($(window).width() < 768){
        if(top >= about - about / 2 + 504)
          addAboutRight();
      }
      else{
        addAboutRight();
      } 
    }
    else if(top+300 >= resume && top+300 < skill){
      removeAboutLeft();
      removeAboutRight();
      removeSkill();
      addResumneiden();

    }
    else if(top+300 >= skill){
      console.log('here')
      removeResume();
      addSkillZoom();
    }
  }
  function addResumneiden(){
    let arrClass = [".edu_title", ".first",".second",".hob_title",".hob_first",".hob_second",".hob_third"]
    for(let i=0;i<7;i++){
      timeOut(addResume,arrClass[i],i*400);
    }
  }
  function addSkillZoom(){
    let arrClass = [".skill1",".skill2",".skill3",".skill4",".skill5"];
    for(let i=0;i<5;i++){
      timeOut(addSkill,arrClass[i],i*400);
    }
  }
  async function timeOut(fc,a,b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fc(a);
      }, b)
    });
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
  function addResume(addClass){
    $(addClass).addClass("animated fadeInUp");
  }
  function removeResume(){
    $(".ani_item").removeClass("animated fadeInUp");
  }
  function addSkill(addClass){
    $(addClass).addClass("animated zoomIn");
  }
  function removeSkill(){
    $(".card").removeClass("animated zoomIn");
  }
});
