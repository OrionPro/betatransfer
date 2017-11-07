
import common from '../../js/common';
import '../../pages/personal-account-your-operations/personal-account-your-operations.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './personal-account-your-operations.sass';

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