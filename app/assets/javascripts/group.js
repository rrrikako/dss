$(document).on('turbolinks:load',function(){
  var backgroundImage = $('.group_show__wrapper__image').val();
  $(".group_show__wrapper").css("background-image","url("+ backgroundImage +")");
});