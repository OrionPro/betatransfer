
import common from '../../js/common';

import './contacts.sass';

$(document).ready( function() {
	$("body").addClass("index ink-transition");
});

$(window).resize(function() {

});

$(window).scroll(function() {

});


setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);