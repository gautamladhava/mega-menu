function eqHeight() {
  $.fn.extend({
    equalHeights: function () {
      var top = 0;
      var row = [];
      var classname = ("equalHeights" + Math.random()).replace(".", "");
      $(this)
        .each(function () {
          var thistop = $(this).offset().top;
          if (thistop > top) {
            $("." + classname).removeClass(classname);
            top = thistop;
          }
          $(this).addClass(classname);
          $(this).height("auto");
          var h = Math.max.apply(
            null,
            $("." + classname)
              .map(function () {
                return $(this).height();
              })
              .get()
          );
          $("." + classname).height(h);
        })
        .removeClass(classname);
    },
  });
  $(".brand-slider .item").equalHeights();
  $(
    ".service-list-block .service-list-inner .service-list .service-text .text-inner"
  ).equalHeights();
  if (jQuery(window).width() > 574) {
    jQuery(
      ".header-part .menu-list .sub-menu .sub-item .sub-menu-wrapper .product-list li"
    ).equalHeights();
  }
}

$(window).ready(function () {
  jQuery(".header-part .menu-list .sub-menu").on("mouseenter", function () {
    jQuery(
      ".header-part .menu-list .sub-menu .sub-item .sub-menu-wrapper .product-list li"
    ).equalHeights();
    setTimeout(function () {
      jQuery(
        ".header-part .menu-list .sub-menu .sub-item .sub-menu-wrapper .product-list li"
      ).equalHeights();
    }, 100);
  });
  setTimeout(function () {
    eqHeight();
  }, 500);
  $(".open-menu").click(function () {
    $(".menu-tablet").toggleClass("change");
  });
  $(".tablet-sub-menu").css("right", "-100%");
  $(".tablet-sub-menu-list").click(function () {
    $(this).find(".tablet-sub-menu").css("right", "0");

    $(".tablet-sub-menu")
      .not($(this).find(".tablet-sub-menu"))
      .css("right", "-100%");
  });

  $(".tablet-sub-menu .back-button").click(function (event) {
    event.stopPropagation();
    $(".tablet-sub-menu").css("right", "-100%");
  });
  $(".full-overlay").click(function () {
    $(".menu-tablet").removeClass("change");
    $("body").removeClass("open");
  });

  $(".open-menu").click(function () {
    $("body").toggleClass("open");
  });
$(".search-input-modal").hide()
  $(".search-item").click(function(){
    $(".search-input-modal").slideDown(100);
    $(".search-overaly").css("display","block")
  })
  $(".close-btn").click(function(){
    $(".search-input-modal").slideUp(0);
    $(".search-overaly").css("display","none")
  })
$(".search-overaly").click(function(){
  $(".search-input-modal").slideUp(0);
  $(".search-overaly").css("display","none")
})
  // $(".tablet-sub-menu").mCustomScrollbar({
  //   scrollButtons: { enable: false },
  //   scrollInertia: 400,
  // });
});
