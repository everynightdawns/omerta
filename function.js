$(document).mousemove(function(e) {
  $("#image").css({
    left: e.pageX,
    top: e.pageY
  });
});
/*
var
    hoverBox   = $('.box-selector'),
    hoverImage = $('#image');

hoverBox.mousemove(function(e) {
    hoverImage.css({
        left: e.pageX,
        top:  e.pageY
    });
})

.mouseout(function() {
    hoverImage.css({
        left: -10000,
        top:  -10000
    });
});
*/
// JavaScript Document