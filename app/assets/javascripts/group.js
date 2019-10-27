$(document).on('turbolinks:load',function(){
  //group_showの背景画像
  var backgroundImage = $('.group_show__wrapper__image').val();
  $(".group_show__wrapper").css("background-image","url("+ backgroundImage +")");

  //マウスオーバーでサイドバーの表示
  $('.side_bar').hover(function(){
    console.log(this);
    $(this).stop(true).animate({'margin-right':'240px'}, 500);
  },
  function(){
    $(this).animate({'margin-right':'0px'}, 500);
  }
  );
});

//group_indexとgroup_showの音楽再生
function playSound(postSound){
  var audio = document.getElementById(postSound);
  if(audio.paused){
    audio.play();
  }
  else{
    audio.pause();
  }
  }


