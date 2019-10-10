$(function() {

  let hide_btn_sw = 0;

  //ボタン表示切り替え
  $('.hide-ans').on('click', function(){
    if(hide_btn_sw == 1){
      $('.handsign_img').css('display','inline');
      $('.hide-ans').text('答えを隠す');
      hide_btn_sw = 0;
    }else{
      $('.handsign_img').css('display','none');
      $('.hide-ans').text('答えを表示');
      hide_btn_sw = 1;
    }
  });

});