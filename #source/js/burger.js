// menu-burger
const menuBurger = document.querySelector('.burger-menu');
const menuBody = document.querySelector('.menu__body');
if (menuBurger) {
	menuBurger.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		menuBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
	// header__button в бургере
	const MenuBtn = document.createElement('div');
	MenuBtn.className = "menu__button";
	MenuBtn.innerHTML = document.querySelector('.header__button').innerHTML;

	function InsertMenuBtn() {
		if (this.window.innerWidth <= 480) {
			menuBody.appendChild(MenuBtn);
		}
		else if (menuBody.querySelector('.menu__button')) {
			menuBody.removeChild(MenuBtn);
		}
	}

	InsertMenuBtn();
	window.addEventListener("resize", InsertMenuBtn);
}
