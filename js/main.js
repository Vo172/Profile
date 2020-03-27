$(document).ready(function(){
  $(".border_btn").click(function(){
    if($("header").css("width") == "0px"){
      $(window).width() > 768 ? $("header").css("width","300px") : $("header").css("width","250px");
      $(window).width() > 768 ? $(".ss_home").css("margin-left","300px!important") : $("margin-left").css("width","250px!important");
    }
    else{
      $("header").css("width","0px");
    }
  });
});