import * as myFunctions from "./modules/functions.js";
import { burger } from "./burger.js";
import { spoiler } from "./spoiler.js";
//import { initSwiper } from "./init-swiper.js";
//import { popup } from "./popup.js";


myFunctions.isWebp();

// Перенапраправление на главную при нажатии на лого
$('.logo').click(function () {
	location.href = "index.html";
});

$(document).ready(function () {
	burger();
	spoiler();
	//initSwiper();
	//popup();
});