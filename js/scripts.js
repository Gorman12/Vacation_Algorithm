$(document).ready(function() {
  $("#welcome_screen").show();
  $("#welcome_screen").click(function() {
    $("#welcome_screen").hide();
    $("#intro").show();
    });
  $("#intro form").submit(function(event) {
    var name = $("input#name").val();
    if (name == "") {
      name = ("Mr. I dont follow directions");
    }
    $(".hello").text(name);
    $("form").hide();
    $("#intro #name_user_text").hide();
    $("#intro #welcome_user").show();
    $("#intro h3").show();
    event.preventDefault();
  });
  $("#intro h3").click(function() {
    $("#intro").hide();
    $("#base_question").show();
    });
    $("#base_question .fade_in").click(function(event) {
      $("#base_question").hide();
      var a = (event.target.id).toString();
      if (a === "warm") {
      $("#base_warm").show();
    } else {
      $("#base_cold").show();
    }
  });
  $(".question_2 .fade_in").click(function(event) {
    $(".question_2").hide();
    var a = (event.target.id).toString();
    if ((a === "ocean") || (a === "no-ocean")) {
      $("#base_warm_" + a).show();
    } else {
      $("#base_cold_" + a).show();
    }
  });
  $(".question_3 .fade_in").click(function(event) {
    $(".question_3").hide();
    var a = (event.target.id).toString();
    if ((a === "beach") || (a ==="explore")) {
      $("#base_warm_ocean_" + a).show();
      $("#base_warm_ocean_" + a).click(function() {
        $(".content").toggle();
      });
    } else if ((a === "landscape") || (a ==="culture")) {
      $("#base_warm_no-ocean_" + a).show();
      $("#base_warm_no-ocean_" + a).click(function() {
        $(".content").toggle();
      });
    } else if ((a === "advanced") || (a === "novice")) {
      $("#base_cold_mountain_" + a).show();
      $("#base_cold_mountain_" + a).click(function() {
        $(".content").toggle();
      });
    } else  {
      $("#base_cold_no-mountain_" + a).show();
      $("#base_cold_no-mountain_" + a).click(function() {
        $(".content").toggle();
      });
    }
  });
});
