
// Spoiler Jquery (Header menu)
jQuery(($) => {
	if ($(window).width() <= 480) {
		const homeLink = $('.navbar').children().children()[0];
		const homeText = $(homeLink).text();
		const homeButton = $('<h3 class = "menu-footer__title navbar-spoiler">' + homeText + '</h3>');
		$('.navbar').prepend(homeButton);
		console.log(homeButton);
	}
	const menuTitle = $('.menu-footer__title');
	if ($(window).width() <= 480) {
		$(menuTitle).each(function (index, el) {
			$(this).click(function (e) {
				if ($(this).hasClass("navbar-spoiler")) {
					const firstEl = $(this).next().children()[0];
					$(firstEl).css("display", "none");
				}
				$(this).toggleClass('_active').next().slideToggle(300);
			});
		});
	}
	else {
		$(menuTitle).each(function (index, el) {
			$(this).removeClass('_active').next().slideDown(300);
		});
	}
});
