$(document).ready(function() {
  $("#welcome_screen .btn_1").click(function() {
    $("#welcome_screen").hide();
    $("#personal_information").show();
  });
  $("#personal_information .btn_2").click(function() {
    $("#personal_information").hide();
    $("#questions").show();
  });
});
