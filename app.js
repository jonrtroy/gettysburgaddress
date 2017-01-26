$(document).ready(function() {

  $("#container").fadeIn(1500);

  // var $paragraphYellow = $("p").css("color", "yellow");

  $("p").hover(function(){
    $(this).css("background-color", "yellow");
  }, function(){
    $(this).css("background-color", "initial");
  });
  $("h2").on("click", function(){
    $(this).animate({
      "opacity": ".25",
      "margin-left": "20px"
    }, function(){
      $(".speech").animate({
        "opacity": ".50"
      });
    });
  });

  $("#switcher-default").on("click", function(){
    $("body").css("font-size", "62.5%");
  });

  $("#switcher-large").on("click", function(){
    $("body").css("font-size", "+=2%");
  });

  $("#switcher-small").on("click", function(){
    $("body").css("font-size", "-=2%");
 });

  $(document).on("keydown", function(event){
    if (event.which === 37) {
      $("#switcher").stop().animate({
        "margin-left": "-=20px"
      });
    } else if (event.which === 38) {
      $("#switcher").stop().animate({
        "margin-top": "-=20px"
      })
    } else if (event.which === 39) {
      $("#switcher").stop().animate({
        "margin-left": "+=20px"
      })
    } else if (event.which === 40) {
      $("#switcher").stop().animate({
        "margin-top": "+=20px"
      })
    }
  });
});
