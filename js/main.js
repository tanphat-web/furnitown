//=================init=================\\

$(document).ready(function () {
  AOS.init();
})
//=================Replace To SVG=================\\

$(document).ready(function() {
  $(window).on('load', function () {
    $('.svg').svgToInline()
  });
})

//=================back to top=================\\

$(document).ready(function () {
  $('.back-top p').on('click', function() {
    window.scroll ( {
      'top' : 0,
      behavior : 'smooth'
    })
  })
})
//=================loading=================\\
$(document).ready(function() {
  $(window).load(function() {
    $('.loader').fadeOut('slow', function() {
      $(this).remove();
    });
  });
})
//=================menu=================\\
  $(document).on('scroll', function() {
    let menuScroll = $('.menu-scroll');
      if(window.pageYOffset >= 750 ) {
        $(menuScroll).slideDown()
      }else {
        $(menuScroll).slideUp()
      }
  })
  $('.menu-button').on('click', function() {
    $('.menu-md').addClass('active');
    $('body').addClass('hidden');
  })
  $('a.cancel').on('click', function(event) {
    event.preventDefault();
      close();
  })
  $('.menu-md .overlay').on('click', function(event) {
      close();
  })
  $(document).on('keyup',function(e) {
      if(e.keyCode === 27) {
        close();
      }
  })
  function close() {
    $('.menu-md').removeClass('active');
    $('body').removeClass('hidden');
  }
$('.menu-mobile .hamburger').on('click', function() {
  $('.menu-mb').slideDown()
})
$('.menu-mb a.cancel').on('click', function(event) {
  event.preventDefault();
  $('.menu-mb').slideUp()


})
// select project 
$(document).ready(function() {
	$('.project-select .select span').on('click', function (e) {
		e.preventDefault()
		e.stopPropagation()
		$('.project-select .select ul').slideDown()
	})
	
	$('.project-select .select ul li').on('click', function(e) {
		$('.project-select .select span').text($(this).text())
		$('.project-select .select ul').hide()
	})
	$('body').on('click' , function() {
		$('.project-select .select ul').hide()
	
	})
})

// page number 
$(document).ready(function() {
	// $('.pages-number__items span').on('mouseenter', function() {
	// 	$(this).addClass('active');
	// 	$('.pages-number__items span').not($(this)).removeClass('active')
	// })
	// $('.pages-number__items span').on('mouseover', function() {
	// 	$(this).removeClass('active');
	// })
	// $('.pages-number__items span').on('click', function() {
	// 	$(this).removeClass('active');
	// })
})
// button hover 
const buttons = document.querySelectorAll(".btn-hover");

buttons.forEach((button) => {
	const div = button.querySelector("span");
	["mouseenter", "mouseleave"].forEach((event) => {
		button.addEventListener(event, (e) => {
			div.style.left = `${e.offsetX}px`;
			div.style.top = `${e.offsetY}px`;
		});
	});
});


// validate 
$(document).ready(function() {
	$('.form-group button').on('click', function(e) {
		alert('From Tấn Phát width love <3')
	})
})
//=================Carousel=================\\
$(document).ready(function() {
  let $carousel = $('.main-carousel');
  $carousel.flickity({
    // options
    cellAlign: 'left',
    contain: false,
    pageDots: false,
    prevNextButtons: false,
    friction: 0.6,
    wrapAround: true,
    fullscreen: true,
    autoPlay:5000
  });
})
$(document).ready(function() {
  let $carousel = $('.detail-carousel__wrap');
  $carousel.flickity({
    // options
    cellAlign: 'left',
    contain: false,
    pageDots: false,
    prevNextButtons: false,
    friction: 0.6,
    wrapAround: true,
    fullscreen: true,
  });
  $('button.prev').on('click', function() {
		$carousel.flickity('previous');
  })
  $('button.next').on('click', function() {
		$carousel.flickity('next');
  })
})