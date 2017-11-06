
import common from '../../js/common';
import '../../pages/after-payment-bid/after-payment-bid.pug'; //это для обновления страницы при hotreload - при npm build убрать

import './after-payment-bid.sass';

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