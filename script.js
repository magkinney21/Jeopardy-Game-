var points = 0;
$('zero').onclick = reset;
$('#animal100C').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
$('#art100D').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
$('#music100A').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
$('#space100C').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
$('#book100B').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
$('#animal200A').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
$('#art200A').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
$('#music200').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
$('#space200B').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
$('#book200A').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
$('#animal300B').click(function(){
    points += 300;
  $('#number').text(points);
  console.log("points " + points )
});
$('#art300A').click(function(){
    points += 300;
  $('#number').text(points);
  console.log("points " + points )
});
$('#music300D').click(function(){
    points += 300;
  $('#number').text(points);
  console.log("points " + points )
});
$('#space300D').click(function(){
    points += 300;
  $('#number').text(points);
  console.log("points " + points )
});
$('#book300C').click(function(){
    points += 300;
  $('#number').text(points);
  console.log("points " + points )
});
$('#animal400A').click(function(){
    points += 400;
  $('#number').text(points);
  console.log("points " + points )
});
$('#art400C').click(function(){
    points += 400;
  $('#number').text(points);
  console.log("points " + points )
});
$('#music400B').click(function(){
    points += 400;
  $('#number').text(points);
  console.log("points " + points )
});
$('#space400C').click(function(){
    points += 400;
  $('#number').text(points);
  console.log("points " + points )
});
$('#book400A').click(function(){
    points += 400;
  $('#number').text(points);
  console.log("points " + points )
});
$('#animal500B').click(function(){
    points += 500;
  $('#number').text(points);
  console.log("points " + points )
});
$('#art500C').click(function(){
    points += 500;
  $('#number').text(points);
  console.log("points " + points )
});
$('#music500A').click(function(){
    points += 500;
  $('#number').text(points);
  console.log("points " + points )
});
$('#space500B').click(function(){
    points += 500;
  $('#number').text(points);
  console.log("points " + points )
});
$('#book500B').click(function(){
    points += 500;
  $('#number').text(points);
  console.log("points " + points )
});
//////reset button
function reset(points) {
  points = 0;
  $('#number').text(points);
}
//////correct functions
function add100() {

}
function add200() {
  points = points + 200;
  $('#number').text(points);
}
function add300() {
  points = points + 300;
  $('#number').text(points);
}
function add400() {
  points = points + 400;
  $('#number').text(points);
}
///////incorrect functions
function add500() {
  points = points + 500;
  $('#number').text(points);
}

//answers below this line //
$( document ).ready(function() {
  var correctAnswer = "animal100C";
  $(".animal100").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    //console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "art100D";
  $(".art100").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    //console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "music100A";
  $(".music100").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "space100C";
  $(".space100").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "book100B";
  $(".book100").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "animal200A";
  $(".animal200").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "art200A";
  $(".art200").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "music200A";
  $(".music200").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "space200B";
  $(".space200").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "book200A";
  $(".book200").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "animal300B";
  $(".animal300").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "art300A";
  $(".art300").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "music300D";
  $(".music300").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "space300D";
  $(".space300").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "book300C";
  $(".book300").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "animal400A";
  $(".animal400").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "art400C";
  $(".art400").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "music400B";
  $(".music400").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "space400C";
  $(".space400").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "book400A";
  $(".book400").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "animal500B";
  $(".animal500").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "art500C";
  $(".art500").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "music500A";
  $(".music500").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
});
$( document ).ready(function() {
  var correctAnswer = "space500B";
  $(".space500").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
})
$( document ).ready(function() {
  var correctAnswer = "book500B";
  $(".book500").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
})
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

