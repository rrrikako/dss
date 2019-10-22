$(document).on('turbolinks:load',function(){
  //group_showの背景画像
  var backgroundImage = $('.group_show__wrapper__image').val();
  $(".group_show__wrapper").css("background-image","url("+ backgroundImage +")");

  //group_indexとgroup_showの音楽再生
});

function playSound(postSound){
  var audio = document.getElementById(postSound);
  if(audio.paused){
    audio.play();
  }
  else{
    audio.pause();
  }
  }