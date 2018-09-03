$(function() {
  let imgbox = $('.imagebox_content img');

  let origin_size = (num) => {
    let img = new Image();
    img.src = $('.imagebox_content img').attr('src'); //高さと幅を取得したいURLを入力
    if (img.width >= img.height) {
      imgbox.removeClass('wid_long').addClass('hei_long');
    } else if (img.width <= img.height) {
      imgbox.removeClass('hei_long').addClass('wid_long');
    }
  }

  let where_img = (list) =>{
    let num = list;
    let what_tagname = $('.textbox_section *:nth-child('+ num +')').prop('tagName');
    let which_img = $('.textbox_section *:nth-child('+ num +') *:first-child').prop('tagName');

    if (which_img == 'IMG') {
      console.log(`画像が入ってる${what_tagname}`);
    }else{
      console.log(`これは${what_tagname}`);
    }
  }
  let a = $('.textbox_section > *').length;
  console.log(a);
  for (var i = 1; i < a; i++) {
    where_img(i);
  }


  // ---サムネイルの色をロードごとにランダムな色にする--------------------
  let work_length = $('.work').length;
  let rand;
  for (let i = 0; i <= work_length; i++) {
    rand = Math.floor(Math.random() * 360);
    $('.works' + i + ' .titlebox').css('background-color', 'hsl(' + rand + ',100%,50%)');
  }

  // ---リストに画像を格納----------------------------------


  let sec_imglist = [];
  let sec_prevNth = [];
  let sec_pLength = $('.textbox_section p').length;
  let sec_imgLength = $('.textbox_section img').length;
  for (let i = 1; i <= sec_pLength; i++) {
    if ($('.textbox_section p:nth-of-type(' + i + ') img')[0]) {
      sec_imglist.push($('.textbox_section p:nth-of-type(' + i + ') img').attr('src'));
      minus_nth = i - 1;


      // console.log($('.textbox_section p:nth-of-type(' + i + ') img').attr('src'));
      // let tagname = $('.textbox_section p:nth-of-type(' + minus_nth + ') *').prop('tagName');
      // console.log(tagname);

      sec_prevNth.push($('.textbox_section p:nth-of-type(' + minus_nth + ')').offset().top);
    }
  }

  // ---最初の画像を挿入--------------------------------
  $('.imagebox_content img').attr('src', sec_imglist[0]);
  origin_size();
  console.log('sec_imglist');
  console.log(sec_imglist);
  console.log('sec_prevNth');
  console.log(sec_prevNth);

  // ---スクロールして画像を入れ替え-----------------------------


  let winH = $(window).height() / 2;
  $(window).scroll(function() {

    let now_pos = $(window).scrollTop();

    for (let img_list = 0; img_list < sec_imglist.length; img_list++) {
      let off_pos = sec_prevNth[img_list];


      if (off_pos < now_pos + winH) {
        imgbox.attr('src', sec_imglist[img_list]);
      } else if (now_pos === 0) {
        imgbox.attr('src', sec_imglist[0]);
      }
    }
    origin_size();

    if(now_pos > 50){
      console.log('超えた');
      $('.logo').css(
        'top','-40px'
      );
    }else{
      $('.logo').css(
        'top','25px'
      );
    }

  });
  // ---HTMLをエスケープ処理-------------------------------
  // ---これをしないとHTMLはシンタックスハイライトされない--------------
  $('.html').html(function() {
    let txt = $(this).html();
    //クォーテーションの置換
    txt = txt.replace(/[']/g, '&quot;'); //'
    //<>の置換
    txt = txt.replace(/[<]/g, '&lt;');
    txt = txt.replace(/[>]/g, '&gt;');
    //（最後に）全ての改行コードを<br>に変更
    txt = txt.replace(/[\n\r]/g, '<br>');
    // txt = txt.replace('<br>', ''); //最初の行の「<br>」を削除
    $(this).html(txt);
  });

  // ---menuのクリックイベント----------------------------
  $('.hammenu_icon').click(function() {
    $('.hammenu_back').css({
      'background':'rgba(140, 140, 140, 0.5)',
      'z-index':9999
    });
    $('.hammenu_back_screen .menucontent').css('transform', 'translateX(0%)');
  });

  $('.hammenu_back').click(function() {
    setTimeout(function(){
      $('.hammenu_back').css({
        'background':'rgba(255, 255, 255, 0)',
        'z-index':-1
      });
    },400);

    $('.hammenu_back_screen .menucontent').css('transform', 'translateX(100%)');
  });

});
