/*
$(document).mousemove(function(e) {
  $("#image").css({
    left: e.pageX,
    top: e.pageY
  });
});
*/

$(document).mousemove(function(e) {
  const height = $('#image').height() / 8;
  const width = $('#image').width() / 8;
  $("#image").css({
    left: e.pageX - width,
    top: e.pageY - height
  });
});

$('.box').mouseenter(_ => {
  $('#image').show();
});

$('.box').mouseleave(_ => {
  $('#image').hide();
});


// JavaScript Document