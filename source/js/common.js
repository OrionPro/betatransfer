require("../libs/libs").jqueryui();
require("../libs/libs").matchMedia();
// require("../libs/libs").waypoint();
// require("../libs/libs").Animate_css();
require("../libs/libs").animate_modal_js();
require("../libs/libs").magnific_popup();
require("../libs/libs").tooltipster_follower();
require("../libs/libs").tooltipster();
require("../libs/libs").jqueryValidation();
// require("../libs/libs").select2();
require("../libs/libs").input_mask();
require("../libs/libs").sticky();
import Swiper from 'swiper/dist/js/swiper.js';
import validation from '../js/validation';
import modal from '../js/modal';

import '../sass/main.sass';
import functions from '../js/_functions.js';

// табы tabs
function tabs(obj) {
	const buttons = document.querySelectorAll(obj.btn);
	const bodyTabs = document.querySelectorAll(obj.tabsBody);

	let func = function(e){
		"use strict";
		e.preventDefault();
		for( let i = buttons.length; i--; ){
			buttons[i].classList.remove(obj.classBtn);
			bodyTabs[i].classList.remove(obj.classBody);
		}
		this.classList.add(obj.classBtn);
		let item = [].indexOf.call(buttons,this);
		bodyTabs[item].classList.add(obj.classBody)
	};

	[].forEach.call(buttons,item => item.addEventListener('click',func));
}
// Определения браузера
function get_name_browser() {
	// получаем данные userAgent
	const ua = navigator.userAgent;
	// с помощью регулярок проверяем наличие текста,
	// соответствующие тому или иному браузеру
	if (ua.search(/Edge/) > 0) return 'Edge';
	if (ua.search(/Chrome/) > 0) return 'Google Chrome';
	if (ua.search(/Firefox/) > 0) return 'Firefox';
	if (ua.search(/Opera/) > 0) return 'Opera';
	if (ua.search(/Safari/) > 0) return 'Safari';
	if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
	if (ua.search(/Trident/) > 0) return 'Trident';
	// условий может быть и больше.
	// сейчас сделаны проверки только
	// для популярных браузеров
	return 'Не определен';
}
$(document).ready(function () {
	// вводим только цифры
	$('input[type=tel]').on('keydown', function(e){
		if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
			return false;
		};
	});
	// вызов tabs
	tabs({
		btn:'.tabs-items-wrap > .tabs-item',
		tabsBody:'.tabs-wrap',
		classBody:'active',
		classBtn: 'active'
	});
	tabs({
		btn:'.tabs-items-wrap-inner > .tabs-item',
		tabsBody:'.tabs-wrap-inner',
		classBody: 'active',
		classBtn:'active'
	});
	// инициализация swiper слайдера
	var swiper = new Swiper('.currency-reserves__slider', {
		slidesPerView: 10,
		spaceBetween: 0,
		direction: 'vertical',
		pagination: {
			el: '.currency-reserves__slider .swiper-pagination',
		},
		navigation: {
			nextEl: '.currency-reserves__slider-navigation .swiper-button-next',
			prevEl: '.currency-reserves__slider-navigation .swiper-button-prev',
		},
	});

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		// $(".from_what_is_seo .from_what_is_seo_bot_decor svg").css("bottom", "-217px");
		// $(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		// $(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
	}

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Edge") {
		$('.check i, .radio i').css("margin-top", "2px")
	}
	if (get_name_browser() == "Google Chrome") {
		console.log("Google Chrome");

	}
	if (get_name_browser() == "Safari") {
		console.log("Safari");
	}
	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });
	// скролл вверх
	$(".footer__btn-up a[href*='#']").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 500);
	    return false;
	});

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	// $(".scroll_to").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $("#" + anchor.data('scroll')).offset().top
	//     }, 500);
	//     return false;
	// });

	//  Активация слайдера
	// $(".owl-carousel").owlCarousel({
	//     loop: true,
	//     items: 1,
	//     dots: true
	// });

	// Кастомные кнопки управления слайдером
	// var owl = $('.owl-carousel');
	// owl.owlCarousel();
	// // Go to the next item
	// $('.customNextBtn').click(function() {
	//     owl.trigger('next.owl.carousel', [700]);
	// });
	// // Go to the previous item
	// $('.customPrevBtn').click(function() {
	//     // With optional speed parameter
	//     // Parameters has to be in square bracket '[]'
	//     owl.trigger('prev.owl.carousel', [700]);
	// });


});

$(window).resize(function () {

});

$(window).scroll(function () {

});