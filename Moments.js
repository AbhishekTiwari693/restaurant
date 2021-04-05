// Sticky navigation //
let navbar = $(".navbar");

$(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky-top");
    } else {
      navbar.removeClass("sticky-top");
    }
  });

// pic in and out effect

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".zoom img").css({
        width: (100 + scroll/5) + "%"
    })
})



// Counter animation

  let nCount = function(selector) {
    $(selector).each(function () {
      $(this).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: "swing",
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };

  let a = 0;
$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});

