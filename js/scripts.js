$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();

  var sentenceInput = $("#sentence").val();
  var buildPuzzle = "";
  for (var i = 0; i < sentenceInput.length; i++) {
    var letter = "";
    if (sentenceInput[i] === "a") {
      letter = "-";
    } else {
      letter = sentenceInput[i];
    }
    buildPuzzle += letter;
  }
  $("#output").text(buildPuzzle);
  $("#sentence").hide();

  });
  $("#clear").click(function() {
    $("#sentence").show();
    $("#input").trigger("reset");
    $("#output").text("");
  });
});
