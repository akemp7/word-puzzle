$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();
  var userSentence = $("#sentence").val();
  var sentenceInput = userSentence.toLowerCase();
  var buildPuzzle = "";
  for (var i = 0; i < sentenceInput.length; i++) {
    var letter = "";
    if (sentenceInput[i] === "a" || sentenceInput[i] === "e" || sentenceInput[i] === "i" || sentenceInput[i] === "o" || sentenceInput[i] === "u") {
      letter = "-";
    } else {
      letter = sentenceInput[i];
    }
    buildPuzzle += letter;
  }
  $("#output").text(buildPuzzle);
  $("#sentence").hide();

    // $("#hint").click(function() {
    //
    // });
    $("#forfeit").click(function() {
      $("#user-sentence").text(userSentence);
      $("#answer").show();
    });
  });
  $("#clear").click(function() {
    $("#sentence").show();
    $("#input").trigger("reset");
    $("#output").text("");
  });
});
