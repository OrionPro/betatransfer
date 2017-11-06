
import common from '../../js/common';
import '../../pages/exchange-BTC-QIWIRUB/exchange-BTC-QIWIRUB.pug'; //это для обновления страницы при hotreload - при npm build убрать

import './exchange-BTC-QIWIRUB.sass';

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