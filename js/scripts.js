$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();

  var sentenceInput = $("#sentence").val();
  

  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").text("");
  });
});
