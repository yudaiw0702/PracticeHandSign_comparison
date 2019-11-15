$(function() {

  let hide_btn_sw = 0;
  let stage = "あ";

  function a (evt) {
    $("#sign_temp").text("あなたの回答：あ");
    if(stage == 'あ'){
      call_a();
    }
  }

  function i (evt) {
    $("#sign_temp").text("あなたの回答：い");
    if(stage == 'い'){
      call_i();
    }
  }

  function ku (evt) {
    $("#sign_temp").text("あなたの回答：く");
    if(stage == 'く'){
      call_ku();
    }
  }

  function si (evt) {
    $("#sign_temp").text("あなたの回答：し");
    if(stage == 'し'){
      call_si();
    }
  }

  function e (evt) {
    $("#sign_temp").text("あなたの回答：え");
    if(stage == 'え'){
      call_e();
    }
  }

  function ru (evt) {
    $("#sign_temp").text("あなたの回答：る");
    if(stage == 'る'){
      $('.circle').css('display','inline');
        call_ru();
    }
  }

  function mu (evt) {
    $("#sign_temp").text("あなたの回答：む");
    if(stage == 'む'){
      call_mu();
    }
  }

  function hi (evt) {
    $("#sign_temp").text("あなたの回答：ひ");
    if(stage == 'ひ'){
      call_hi();
    }
  }

  //問題変更ボタン
  $('.btn-change').on('click', function(){
    if(stage == 'あ'){
      call_a();
    }else if(stage == 'い'){
      call_i();
    }else if(stage == 'く'){
      call_ku();
    }else if(stage == 'し'){
      call_si();
    }else if(stage == 'え'){
      call_e();
    }else if(stage == 'る'){
      call_ru();
    }else if(stage == 'む'){
      call_mu();
    }else if(stage == 'ひ'){
      call_hi();
    }
  });

  //ボタン表示切り替え
  $('.hide-ans').on('click', function(){
    if(hide_btn_sw == 1){
      $('.handsign_img').css('display','none');
      $('.hide-ans').text('画像を表示');
      hide_btn_sw = 0;
    }else{
      $('.handsign_img').css('display','inline');
      $('.hide-ans').text('画像を隠す');
      hide_btn_sw = 1;
    };
  });

  function call_a(){
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","image/handsign/hs_i.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：い");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'い';
    }, 2000);
  };

  function call_i(){
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","image/handsign/hs_ku.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：く");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'く';
    }, 2000);
  };

  function call_ku(){
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","image/handsign/hs_si.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：し");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'し';
    }, 2000);
  };

  function call_si(){
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","image/handsign/hs_a.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：え");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'え';
    }, 2000);
  };

  function call_e(){
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","image/handsign/hs_ru.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：る");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'る';
    }, 2000);
  };

  function call_ru(){
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","image/handsign/hs_mu.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：む");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'む';
    }, 2000);
  };

  function call_mu(){
    $('.circle').css('display','inline');
    setTimeout(function(){
      $('.handsign_img').attr("src","image/handsign/hs_hi.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：ひ");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'ひ';
    }, 2000);
  };

  function call_hi(){
    setTimeout(function(){
      $('.circle').css('display','inline');
      $('.handsign_img').attr("src","image/handsign/hs_a.jpg");
      $(".circle").css('display','none');
      $(".handsign_text").text("問題：あ");
      $("#sign_temp").text("あなたの回答：？");
      stage = 'あ';
    }, 2000);
  };

  //指文字データ
  var trainer = new LeapTrainer.Controller();

  trainer.fromJSON('{"name":"A","pose":true,"data":[[{"x":0.3472222222222222,"y":0.0026479955169245346,"z":0.024720609802506024,"stroke":1},{"x":0.3055555555555556,"y":0.0023302360548935674,"z":0.02175413662620529,"stroke":1},{"x":-0.6527777777777778,"y":-0.004978231571818103,"z":-0.0464747464287113,"stroke":1}]]}');

  trainer.fromJSON('{"name":"I","pose":true,"data":[[{"x":-0.2507657543808974,"y":0.02799742441748506,"z":0.3472222222222222,"stroke":1},{"x":-0.2206738638551897,"y":0.02463773348738687,"z":0.30555555555555547,"stroke":1},{"x":0.4714396182360871,"y":-0.052635157904871936,"z":-0.6527777777777778,"stroke":1}]]}');

  trainer.fromJSON('{"name":"KU","pose":true,"data":[[{"x":0.25492136490809914,"y":-0.08363889226236315,"z":0.033468302922396886,"stroke":1},{"x":0.24835954503063362,"y":-0.033365150249834066,"z":-0.02385445951274004,"stroke":1},{"x":0.241797725153168,"y":0.01690859176269502,"z":-0.08117722194787694,"stroke":1},{"x":-0.7450786350919009,"y":0.10009545074950221,"z":0.07156337853822006,"stroke":1}]]}');

  trainer.fromJSON('{"name":"SI","pose":true,"data":[[{"x":0.24692425376236726,"y":-0.03363751060968054,"z":-0.03368873540298582,"stroke":1},{"x":0.2078207089603945,"y":0.005401374656955393,"z":-0.004025538024756012,"stroke":1},{"x":0.16871716415842186,"y":0.0444402599235912,"z":0.0256376593534738,"stroke":1},{"x":0.1296136193564491,"y":0.08347914519022699,"z":0.05530085673170361,"stroke":1},{"x":-0.7530757462376327,"y":-0.09968326916109303,"z":-0.043224242657435574,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"E","pose":true,"data":[[{"x":0.04332285781618256,"y":0.31481125304863133,"z":0.1187568035944021,"stroke":1},{"x":-0.07676560402506163,"y":0.21913520884143844,"z":0.12499072356232843,"stroke":1},{"x":-0.19685406586630586,"y":0.12345916463424567,"z":0.13122464353025487,"stroke":1},{"x":-0.31694252770755005,"y":0.027783120427052777,"z":0.1374585634981812,"stroke":1},{"x":0.547239339782735,"y":-0.6851887469513687,"z":-0.5124307341851665,"stroke":1}]]}');

  trainer.fromJSON('{"name":"RU","pose":true,"data":[[{"x":0.2926610908293195,"y":0.24752671135559362,"z":0.09356960793646493,"stroke":1},{"x":0.14022970903905768,"y":0.16762006826919434,"z":0.04106326227213847,"stroke":1},{"x":-0.012201672751204151,"y":0.08771342518279507,"z":-0.01144308339218797,"stroke":1},{"x":-0.16463305454146587,"y":0.007806782096395737,"z":-0.06394942905651448,"stroke":1},{"x":-0.3170644363317277,"y":-0.07209986099000354,"z":-0.11645577472084094,"stroke":1},{"x":-0.46949581812198954,"y":-0.15200650407640262,"z":-0.16896212038516742,"stroke":1},{"x":0.5305041818780105,"y":-0.2865606218375724,"z":0.22617753734610743,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"MU","pose":true,"data":[[{"x":0.10174123352196018,"y":-0.27509655001032374,"z":0.26054674104851927,"stroke":1},{"x":0.14673347987352692,"y":-0.24163448332989212,"z":0.12073725035821764,"stroke":1},{"x":0.19172572622509376,"y":-0.2081724166494605,"z":-0.019072240332084045,"stroke":1},{"x":-0.4402004396205811,"y":0.7249034499896763,"z":-0.362211751074653,"stroke":1}]]}');
  
  trainer.fromJSON('{"name":"HI","pose":true,"data":[[{"x":0.10987786831137547,"y":0.13298039446915183,"z":0.3472222222222222,"stroke":1},{"x":0.09669252411401041,"y":0.1170227471328536,"z":0.30555555555555547,"stroke":1},{"x":-0.20657039242538588,"y":-0.25000314160200543,"z":-0.6527777777777778,"stroke":1}]]}');
  //trainer.fromJSON('');

  trainer.on('A', a);
  trainer.on('I', i);
  trainer.on('KU', ku);
  trainer.on('SI', si);
  trainer.on('E', e);
  trainer.on('RU', ru);
  trainer.on('MU', mu);
  trainer.on('HI', hi);

});