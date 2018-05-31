$(document).foundation()

$('.off-canvas a').on('click', function() {
  $('.off-canvas').foundation('.close');
});

$(window).scroll(function(){

  var fromTop = $(window).scrollTop();

  console.log(fromTop);

  if(fromTop >= 0){
  $("#homeimage").css({
  "top": fromTop * 0.4 + 0 + "px",
  })
  }

  if(fromTop >= 0){
  $("#homearticle_desktop").css({
  "top": fromTop * 0.3 + 70 + "px",
  })
  }


  });
