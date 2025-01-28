$(document).ready(function() {
  $(".number").click(function() {
    var hodnota = $(this).text();

    $("#display").text(function(i, oldtext){
      if(oldtext==="0"){
        return hodnota
      }
      else{
        return oldtext + hodnota
      }
    });

  });









});