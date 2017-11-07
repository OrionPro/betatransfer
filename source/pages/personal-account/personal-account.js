
import common from '../../js/common';
import '../../pages/personal-account/personal-account.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './personal-account.sass';

$(document).ready( function() {

});

$(window).resize(function() {

});

$(window).scroll(function() {

});


setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);