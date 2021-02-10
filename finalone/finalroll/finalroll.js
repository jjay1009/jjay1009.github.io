$(document).ready(function() {

  $("#rollerball").click(function(){
    $("#green").show().delay(5000).queue(function(n) {
  $(this).hide(); n();
});
  });
  $("#liquid").click(function(){
    $("#animalic").show().delay(5000).queue(function(n) {
  $(this).hide(); n();
});
  });
  $("#ss").click(function(){
    $("#aromatic").show().delay(5000).queue(function(n) {
  $(this).hide(); n();
});
  });
})
