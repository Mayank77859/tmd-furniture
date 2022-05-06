// Slider JS HomePage=============================================
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  }
  repeater();
}
repeat();

// Product Like Button=============================

$('.btn-counter').on('click', function (event, count) {
  event.preventDefault();

  var $this = $(this),
    count = $this.attr('data-count'),
    active = $this.hasClass('active'),
    multiple = $this.hasClass('multiple-count');

  // First method, allows to add custom function
  // Use when you want to do an ajax request
  /* if (multiple) {
  $this.attr('data-count', ++count);
  // Your code here
  } else {
  $this.attr('data-count', active ? --count : ++count).toggleClass('active');
  // Your code here
  } */

  // Second method, use when ... I dunno when but it looks cool and that's why it is here
  $.fn.noop = $.noop;
  $this.attr('data-count', !active || multiple ? ++count : --count)[multiple ? 'noop' : 'toggleClass']('active');

});
// ==============================================================================

// Product Image Zoom=====================================================		

var zoom = 1;

$('.zoom').on('click', function () {
  zoom += 0.1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoom-init').on('click', function () {
  zoom = 1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoom-out').on('click', function () {
  zoom -= 0.1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});