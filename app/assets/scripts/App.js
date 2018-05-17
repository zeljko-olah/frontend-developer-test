import $ from 'jquery'

// Navigation Hamburger
$('#toggle').click(function() {
   $(this).next('.nav').toggleClass("is-collapsed-mobile")
})

// Navigation Links Active Class
$('nav li').click(function(){
  $('.nav li').each(function () {
    if ($(this).hasClass('nav__item--current')) {
      $(this).removeClass("nav__item--current")
      $(this).addClass("nav__item")
    }
  })
  $(this).addClass("nav__item--current")
});

// Custom Slider
(function() {
  // get all relevant elements
  let carousel = document.getElementsByClassName('slider__carousel-wrapper')[0]
  let next = carousel.getElementsByClassName('next')[0]
  let prev = carousel.getElementsByClassName('prev')[0]
  let inner = carousel.getElementsByClassName('inner')[0]
  let imgs = inner.getElementsByTagName('img')
  // initialize counters
  let currentImageIndex = 0
  let imagesOnScreen = 2

  // extract dynamic image width and right margin then calculate width
  let imgWrap = document.getElementsByClassName('image-wrapper')[0]
  let slideWidth = imgWrap.getBoundingClientRect().width
  let slideMargin = document.getElementsByClassName('slides-wrap')[0]
  let rightMargin = window.getComputedStyle(slideMargin, null)["margin-right"]
  rightMargin = rightMargin.replace('px', '')
  let width = slideWidth + parseInt(rightMargin)

  // adjust number on images depending on the window size
  if (window.innerWidth > 768) {
    imagesOnScreen = 4
  } else if (window.innerWidth < 600) {
    imagesOnScreen = 1
  }

  // on resize reload to boot the slider
  // window.addEventListener('resize', function(event){
  //   location.reload();
  // })

  // change images by modifying inner div left property
  function switchImg() {
    inner.style.left = -width * currentImageIndex + 'px'
  }

  // add listeners for clicking on arrows and handle that
  next.addEventListener('click', function () {
    currentImageIndex++

    if (currentImageIndex >= imgs.length - (imagesOnScreen - 1)) {
      currentImageIndex = 0
    }

    switchImg()
  })

  prev.addEventListener('click', function () {
    currentImageIndex--

    if (currentImageIndex < 0) {
      currentImageIndex = imgs.length - imagesOnScreen
    }

    switchImg()
  })
})()
