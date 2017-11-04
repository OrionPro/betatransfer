
import common from '../../js/common';
import '../../pages/login/login.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './login.sass';

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