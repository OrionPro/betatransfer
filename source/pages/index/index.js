import common from '../../js/common';
import Swiper from 'swiper/dist/js/swiper.js';

// import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать
// import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './index.sass';

// import animate from '../../js/animate';


$(document).ready(function () {
	$("body").addClass("index ink-transition");
	$(".sticky").sticky({
		topSpacing: 0,
		widthFromWrapper: false
	});
	// инициализация tooltipster
	if (window.matchMedia("(min-width: 992px)").matches) {
		$(".header__modal a").tooltipster({
			plugins: ['follower'],
			theme: 'tooltipster-shadow'
		});
		$(".header__logo a").tooltipster({
			theme: 'tooltipster-light'
		});
	}

	var swiperOurPartners = new Swiper('.our-partners__slider', {
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.our-partners__slider-navigation .swiper-button-next',
			prevEl: '.our-partners__slider-navigation .swiper-button-prev',
		},
		breakpoints: {
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 2,
				spaceBetween: 30,
		},
		768: {
			slidesPerView: 1,
				spaceBetween: 30,
		},
		640: {
			slidesPerView: 1,
				spaceBetween: 20,
		},
		320: {
			slidesPerView: 1,
				spaceBetween: 10,
		}
	}
	});
	// Инициализация маски в input
	$(".mask").mask("+38(999) 999-99-99");
});

$(window).resize(function () {

});

$(window).scroll(function () {

});

setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);