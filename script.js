$( document ).ready(function() {
  var correctAnswer = "C";
  $("#animalC").on("click", function(){
    var answer = "C"
    if (answer === correctAnswer ) {
      alert("correct!");
    } else {
      alert("incorrect");
    };
  });
});


