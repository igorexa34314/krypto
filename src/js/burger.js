
// menu-burger
export function burger() {
	const menuBurger = $('.burger-menu');
	const menuBody = $('.menu__body');
	if (menuBurger) {
		$(menuBurger).click(function (e) {
			$('body').toggleClass('_lock');
			$(menuBurger).toggleClass('_active');
			$(menuBody).toggleClass('_active');
		});

		// header__button в бургере
		const MenuBtn = $('<div class="menu__button">' + $('.header__button').html() + '</div>');

		function InsertMenuBtn() {
			if (window.innerWidth <= 480) {
				$(menuBody).append(MenuBtn);
			}
			else {
				$(menuBody).find('.menu__button').remove();
			}
		}

		InsertMenuBtn();
		window.addEventListener("resize", InsertMenuBtn);
	}
}
