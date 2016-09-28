$(document).ready(function() {
  $("#welcome_screen").click(function() {
    $("#welcome_screen").hide();
    $("#intro").show();
  });
  $("#intro h3").click(function() {
    $("#intro").hide();
    $("#base_question").show();
  });
  $("#base_question .warm").click(function() {
    $("#base_question").hide();
    $("#base_warm").show();
  });
  $("#base_warm .ocean").click(function() {
    $("#base_warm").hide();
    $("#base_warm_ocean").show();
  });
  $("#base_warm_ocean .beach").click(function() {
    $("#base_warm_ocean").hide();
    $("#base_warm_ocean_beach .content").hide();
    $("#base_warm_ocean_beach").show();
    $("#base_warm_ocean_beach").click(function() {
      $(".content").toggle();
    });
  });

  $("#base_warm_ocean .explore").click(function() {
    $("#base_warm_ocean").hide();
    $("#base_warm_ocean_explore .content").hide();
    $("#base_warm_ocean_explore").show();
    $("#base_warm_ocean_explore").click(function() {
      $(".content").toggle();
    });
  });
  $("#base_warm .no-ocean").click(function() {
    $("#base_warm").hide();
    $("#base_warm_no-ocean").show();
  });
  $("#base_warm_no-ocean .landscape").click(function() {
    $("#base_warm_no-ocean").hide();
    $("#base_warm_no-ocean_landscape .content").hide();
    $("#base_warm_no-ocean_landscape").show();
    $("#base_warm_no-ocean_landscape").click(function() {
      $(".content").toggle();
    });
  });
  $("#base_warm_no-ocean .culture").click(function() {
    $("#base_warm_no-ocean").hide();
    $("#base_warm_no-ocean_culture .content").hide();
    $("#base_warm_no-ocean_culture").show();
    $("#base_warm_no-ocean_culture").click(function() {
      $(".content").toggle();
    });
  });
  $("#base_question .cold").click(function() {
    $("#base_question").hide();
    $("#base_cold").show();
  });
  $("#base_cold .mountain").click(function() {
    $("#base_cold").hide();
    $("#base_cold_mountain").show();
  });
  $("#base_cold_mountain .advanced").click(function() {
    $("#base_cold_mountain").hide();
    $("#base_cold_mountain_advanced .content").hide();
    $("#base_cold_mountain_advanced").show();
    $("#base_cold_mountain_advanced").click(function() {
      $(".content").toggle();
    });
  });
  $("#base_cold_mountain .novice").click(function() {
    $("#base_cold_mountain").hide();
    $("#base_cold_mountain_novice .content").hide();
    $("#base_cold_mountain_novice").show();
    $("#base_cold_mountain_novice").click(function() {
      $(".content").toggle();
    });
  });
  $("#base_cold .no-mountain").click(function() {
    $("#base_cold").hide();
    $("#base_cold_no-mountain").show();
  });
  $("#base_cold_no-mountain .whale").click(function() {
    $("#base_cold_no-mountain").hide();
    $("#base_cold_no-mountain_whale .content").hide();
    $("#base_cold_no-mountain_whale").show();
    $("#base_cold_no-mountain_whale").click(function() {
      $(".content").toggle();
    });
  });
  $("#base_cold_no-mountain .springs").click(function() {
    $("#base_cold_no-mountain").hide();
    $("#base_cold_no-mountain_springs .content").hide();
    $("#base_cold_no-mountain_springs").show();
    $("#base_cold_no-mountain_springs").click(function() {
      $(".content").toggle();
    });
  });
});
