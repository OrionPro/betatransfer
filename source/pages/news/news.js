
import common from '../../js/common';

import './news.sass';

$(document).ready( function() {
	$.each($(".news-item__txt p"), function () {
		var self = $(this).text();
		var str = self.slice(0, 450); //например макс 100 символов
		var a = str.split(' ');
		a.splice(a.length - 1, 1);
		str = a.join(' ');
		if ($(this).text().length >= 440) {
			$(this).html(str + ' ...');
		}
	});
});

$(window).resize(function() {

});

$(window).scroll(function() {

});


setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("slow");
}, 500);