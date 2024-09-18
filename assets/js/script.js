// worksセクションのタブ切り替え
jQuery(document).ready(function() {
  jQuery('.works__tab').click(function() {
      var tabId = jQuery(this).attr('id');
      var contentId = tabId.replace('tab-', 'text-');
      var sliderId = tabId.replace('tab-', 'slider-');

      jQuery('.works__tab').removeClass('is-active');
      jQuery(this).addClass('is-active');

      jQuery('.works__text').removeClass('is-active');
      jQuery('#' + contentId).addClass('is-active');

      jQuery('.works__slider').removeClass('is-active');
      jQuery('#' + sliderId).addClass('is-active');
  });
});


// faqセクションのアコーディオン
jQuery('.faq__list').on('click', function() {
  const isOpen = jQuery(this).hasClass('is-open');
  
  // 既に開いているfaq__listを閉じる
  jQuery('.faq__list.is-open').not(this).removeClass('is-open').attr('aria-expanded', 'false');
  jQuery('.faq__answer').not(jQuery(this).children('.faq__answer')).attr('aria-hidden', 'true');

  // クリックしたfaq__listの開閉を切り替える
  jQuery(this).toggleClass('is-open').attr('aria-expanded', !isOpen);

  // クリックしたfaq__listに対応するfaq__answerのaria-hiddenを設定する
  jQuery(this).children('.faq__answer').attr('aria-hidden', isOpen ? 'true' : 'false');
});


//ハンバーガーメニュー切り替え・ドロワーを表示・bodyのスクロールを無効
jQuery('.header__hamburger').on("click", function() {
  jQuery('.header__hamburger, .header__hamburger-bar1, .header__hamburger-bar2, .drawer, .header__hamburger-text').toggleClass( 'is-open' );
  if(jQuery(this).hasClass('is-open')) {
    jQuery(this).attr('aria-label', 'メニューを閉じる');
    jQuery(this).attr('aria-expanded', 'true');
    jQuery('.drawer').attr('aria-hidden', 'false');
  } else {
    jQuery(this).attr('aria-label', 'メニューを開く');
    jQuery(this).attr('aria-expanded', 'false');
    jQuery('.drawer').attr('aria-hidden', 'true');
  } 

  if(jQuery('.header__hamburger-text').hasClass('is-open')) {
    jQuery('.header__hamburger-text').text('close');
  } else {
    jQuery('.header__hamburger-text').text('menu');
  }

  jQuery('body').toggleClass( 'no-scroll' );
});

//問い合わせフォームのお問い合わせ種別の矢印切り替え
jQuery('#select').on("click", function() {
  jQuery(this).toggleClass( 'is-open' );
});


//worksセクションのタブ切り替え
jQuery(document).ready(function() {
  var currentUrl = window.location.href;

  jQuery('.newsList__tab-link').each(function() {
      var tabUrl = jQuery(this).attr('href');

      if (currentUrl === tabUrl) {
          jQuery(this).addClass('is-active');
      } else {
          jQuery(this).removeClass('is-active');
      }
  });

  // 一致しない場合はすべてのリンクにis-activeをつける
  if (jQuery('.newsList__tab-link.is-active').length === 0) {
      jQuery('.newsList__tab-link[href="http://farm.local//archive"]').addClass('is-active');
  }
});

//スムーススクロール
  jQuery(document).ready(function() {
    jQuery('a[href^="#"]').on('click', function(event) {
        var target = jQuery(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: target.offset().top - jQuery('.header').height() // 固定ヘッダーの高さ分だけスクロール位置を調整
            }, 400);
        }
    });
  });
