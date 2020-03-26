$(document).ready(function(){
  $(".border_btn").click(function(){
    if($("header").css("width") == "0px"){
      $("header").css("width","300px");
    }
    else{
      $("header").css("width","0px");
    }

  });
});