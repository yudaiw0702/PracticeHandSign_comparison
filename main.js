$(function() {

  let hide_btn_sw = 0;
  let stage = "あ";

  function a (evt) {
    $("#sign_temp").text("あなたの回答：あ");
    if(stage == 'あ'){
      $('.circle').css('display','inline');
      setTimeout(function(){
        $('.handsign_img').attr("src","image/handsign/hs_i.jpg");
        $(".circle").css('display','none');
        $(".handsign_text").text("問題：い");
        $("#sign_temp").text("あなたの回答：？");
        stage = 'い';
      }, 2000);
    }
  }

  function i (evt) {
    $("#sign_temp").text("あなたの回答：い");
    if(stage == 'い'){
      $('.circle').css('display','inline');
      setTimeout(function(){
        $('.handsign_img').attr("src","image/handsign/hs_ku.jpg");
        $(".circle").css('display','none');
        $(".handsign_text").text("問題：く");
        $("#sign_temp").text("あなたの回答：？");
        stage = 'く';
      }, 2000);
    }
  }

  function ku (evt) {
    $("#sign_temp").text("あなたの回答：く");
    if(stage == 'く'){
      $('.circle').css('display','inline');
      setTimeout(function(){
        $('.handsign_img').attr("src","image/handsign/hs_si.jpg");
        $(".circle").css('display','none');
        $(".handsign_text").text("問題：し");
        $("#sign_temp").text("あなたの回答：？");
        stage = 'し';
      }, 2000);
    }
  }

  function si (evt) {
    $("#sign_temp").text("あなたの回答：し");
    if(stage == 'し'){
      $('.circle').css('display','inline');
      setTimeout(function(){
        $('.handsign_img').attr("src","image/handsign/hs_a.jpg");
        $(".circle").css('display','none');
        $(".handsign_text").text("問題：あ");
        $("#sign_temp").text("あなたの回答：？");
        stage = 'あ';
      }, 2000);
    }
  }

  $('.btn-change').on('click', function(){
    if(stage == 'あ'){
      $('.handsign_img').attr("src","image/handsign/hs_i.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：い");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'い';
    };
  });

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
    };
  });

  //指文字データ
  var trainer = new LeapTrainer.Controller();

  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":0.3472222222222222,"y":0.0026479955169245346,"z":0.024720609802506024,"stroke":1},{"x":0.3055555555555556,"y":0.0023302360548935674,"z":0.02175413662620529,"stroke":1},{"x":-0.6527777777777778,"y":-0.004978231571818103,"z":-0.0464747464287113,"stroke":1}]]}');

  trainer.fromJSON('{"name":"I","pose":true,"data":[[{"x":-0.2507657543808974,"y":0.02799742441748506,"z":0.3472222222222222,"stroke":1},{"x":-0.2206738638551897,"y":0.02463773348738687,"z":0.30555555555555547,"stroke":1},{"x":0.4714396182360871,"y":-0.052635157904871936,"z":-0.6527777777777778,"stroke":1}]]}');

  trainer.fromJSON('{"name":"KU","pose":true,"data":[[{"x":0.25492136490809914,"y":-0.08363889226236315,"z":0.033468302922396886,"stroke":1},{"x":0.24835954503063362,"y":-0.033365150249834066,"z":-0.02385445951274004,"stroke":1},{"x":0.241797725153168,"y":0.01690859176269502,"z":-0.08117722194787694,"stroke":1},{"x":-0.7450786350919009,"y":0.10009545074950221,"z":0.07156337853822006,"stroke":1}]]}');

  trainer.fromJSON('{"name":"SI","pose":true,"data":[[{"x":0.24692425376236726,"y":-0.03363751060968054,"z":-0.03368873540298582,"stroke":1},{"x":0.2078207089603945,"y":0.005401374656955393,"z":-0.004025538024756012,"stroke":1},{"x":0.16871716415842186,"y":0.0444402599235912,"z":0.0256376593534738,"stroke":1},{"x":0.1296136193564491,"y":0.08347914519022699,"z":0.05530085673170361,"stroke":1},{"x":-0.7530757462376327,"y":-0.09968326916109303,"z":-0.043224242657435574,"stroke":1}]]}');
  
  //trainer.fromJSON('');

  trainer.on('A', a);
  trainer.on('I', i);
  trainer.on('KU', ku);
  trainer.on('SI', si);

});