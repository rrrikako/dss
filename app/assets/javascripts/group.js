$(document).on('turbolinks:load',function(){
  //group_showの背景画像
  var backgroundImage = $('.group_show__wrapper__image').val();
  $(".group_show__wrapper").css("background-image","url("+ backgroundImage +")");

  //サイドメニュー表示
  $('.side_bar__wrapper__icon').mouseover(function(){
    $('.side_bar').css('height', 'calc(100vh - 120px)');
  }); 

  $('.side_bar').mouseleave(function(){
    $('.side_bar').css('height', '0');
  }); 

  //グループ検索
  var search_list = $('.side_bar__inner__category');

  function appendGroup(group){
    var html = `<li class="side_bar__inner__category__block">
                  <a href="/groups/${ group.id }">
                    <div class="side_bar__inner__category__block__logo">
                      ${ group.name }
                    </div>
                  </a>
                  <div class="side_bar__inner__category__block__count">
                    ${ group.num }
                    sounds
                  </div>
                </li>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(msg){
    var html = `<li class="side_bar__inner__category__block">
                  ${ msg }
                </li>`
        search_list.append(html);
  }

  $('.side_bar__inner__search').on("keyup", function(){
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/groups/search',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(groups){
      $('.side_bar__inner__category').empty();
      if (groups.length !== 0){
        groups.forEach(function(group){
          appendGroup(group);
        });
      }
      else{
        appendErrMsgToHTML("no result");
      }
    })
    .fail(function(){
    })
  })

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


