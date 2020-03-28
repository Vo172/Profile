$(document).ready(function(){
  $(".border_btn").click(function(){
    if($("header").css("width") == "0px"){
      $(window).width() > 768 ? $("header").css("width","300px") : $("header").css("width","250px");
      $(window).width() > 768 ? $(".ss_home").css("padding-left","300px") : $("padding-left").css("width","250px");
      $(".tag").addClass("humb");
    }
    else{
      $("header").css("width","0px");
      $(".tag").removeClass("humb");
    }
  });    
});
