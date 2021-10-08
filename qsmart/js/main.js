$(document).ready(function () {

	// Маска для ввода номера
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	// Прокрутка вниз
	$(".header_mobile__link a, .hero__btn, li.footer__link a").on("click", function () {

		var currentBlock = $(this).attr("href"),
			currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset - 1
		}, 1000);
	});

	$('.header_mobile__link a').on('click', function () {
		$('.header_mobile').removeClass('active');
		$('.header__menu').removeClass('active');
		$('.header__menu_text').removeClass('active');
	});


	// Popup
	$(".concept__item a").hover(function () {
		var $this = $(this),
			popupId = $this.attr("href");

		$(popupId).fadeIn();

	}, function () {

		$(".js-popup").fadeOut();
	});

	$('.concept__item a').on('click', function (e) {
		e.preventDefault();
	});

});

const swiper = new Swiper('.advantages__slider', {
	// slidesPerView: 1,
	slidesPerView: 'auto',
	spaceBetween: 0,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev'
	},

	pagination: {
		el: ".swiper-pagination",
		// type: "fraction",
	},

	breakpoints: {
		// when window width is >= 320px
		375: {
			centeredSlides: false,
			loop: false,
		},
		// when window width is >= 480px
		1024: {
			// spaceBetween: 30
			centeredSlides: false,
			loop: false,
		},
		// when window width is >= 640px
		1200: {
			slidesPerView: 'auto',
			spaceBetween: 0,
			loop: true,
			centeredSlides: true,
			draggable: true,
		}
	}
});

const swiper2 = new Swiper('.location__slider', {
	slidesPerView: 3,
	// slidesPerView: 'auto',
	spaceBetween: 0,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev'
	},

	pagination: {
		el: ".pagination",
		type: "fraction",
	},

	breakpoints: {
		// when window width is >= 320px
		375: {
			slidesPerView: 'auto',
			loop: false,
		},

		426: {
			slidesPerView: 'auto',
			loop: true,
		},

		// when window width is >= 480px
		1024: {
			slidesPerView: 'auto',
			loop: true,
			// centeredSlides: false,
		},

		// when window width is >= 640px
		1200: {
			// slidesPerView: 2,
			slidesPerView: 'auto',
			loop: true,
			draggable: true,
			// centeredSlides: true,
			// spaceBetween: 75,
		},

		1600: {
			slidesPerView: 'auto',
			loop: true,
			draggable: true,
			// centeredSlides: true,
			// spaceBetween: 75,
		}
	}
});


// Hystmodal
const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	catchFocus: false // удаляет фокус
});

// Липкий меню
const nav = document.querySelector('.header');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}

// Выезжающее меню
// const menuBtn = document.querySelector('.header__menu_btns');
const menuBtn = document.querySelector('.header__menu');
const headerMobile = document.querySelector('.header_mobile');
const headerMenuText = document.querySelector('.header__menu_text');
// const headerMobileContainer = document.querySelector('.header_mobile__container');
const mobileLink = document.querySelector('.header_mobile__link a');

menuBtn.addEventListener('click', function () {

	headerMobile.classList.toggle('active');
	menuBtn.classList.toggle('active');
	headerMenuText.classList.toggle('active');
	// headerMobileContainer.classList.toggle('active');
	nav.classList.toggle('hover');

});

// mobileLink.addEventListener('click', function () {
// 	headerMobile.classList.remove('active');
// })



// 51.132497, 71.403668
// 51.130489, 71.391885

//-------------------- Yandex MAPS -------------------->
// Map 1
(function () {
	ymaps.ready(function () {
		let map = new ymaps.Map("map", {
			center: [51.126546, 71.415561],
			zoom: 13,
			controls: ["zoomControl"],
		});

		map.behaviors.disable("scrollZoom");

		let places = [{
				coors: [51.132436, 71.404125],
				hint: 'Хан Шатыр',
				icon: "img/map/shoping.webp",
				size: [32, 32],
				offset: [-15, -23],
			},
			{
				coors: [51.131602, 71.409250],
				hint: 'Парк "Ғашықтар"',
				icon: "img/map/tree.webp",
				size: [32, 32],
				offset: [5, 5],
			},
			{
				coors: [51.126546, 71.415561],
				hint: 'Мечеть "Нұр-Астана"',
				icon: "img/map/mosque.webp",
				size: [32, 32],
				offset: [-22, -15],
			},
			{
				coors: [51.114848, 71.398054],
				hint: "Magnum Cash & Carry (13 минут пешком)",
				icon: "img/map/shoping.webp",
				size: [32, 32],
				offset: [-12, -12],
			},
			{
				coors: [51.106599, 71.41642],
				hint: "Ботанический сад (15 минут на машине)",
				icon: "img/map/tree.webp",
				size: [32, 32],
				offset: [-12, -12],
			},
			{
				coors: [51.109245, 71.395469],
				hint: 'Ледовая арена "Барыс" (10 минут на машине)',
				icon: "img/map/shoping.webp",
				size: [32, 32],
				offset: [-12, -12],
			},
			{
				coors: [51.118585, 71.400048],
				hint: 'KIA ALLUR AUTO (5 минут пешком)',
				icon: "img/map/shoping.webp",
				size: [32, 32],
				offset: [-12, -12],
			},
			{
				coors: [51.120264, 71.400659],
				hint: 'Chevrolet Allur Auto (5 минут пешком)',
				icon: "img/map/shoping.webp",
				size: [32, 32],
				offset: [-12, -12],
			},
			{
				coors: [51.126517, 71.398656],
				hint: 'Тойота Центр Есиль (5 минут пешком)',
				icon: "img/map/shoping.webp",
				size: [32, 32],
				offset: [-12, -12],
			},
			{
				coors: [51.122435, 71.401189],
				hint: 'На пресечении улицы Абикен Бектуров и проспекта Туран',
				icon: "img/map/zhk.webp",
				size: [48, 48],
				offset: [-12, -12],
			},
		];

		let placemarks = places.map(function (item) {
			return new ymaps.Placemark(
				item.coors, {
					hintContent: item.hint,
				}, {
					iconLayout: "default#imageWithContent",
					iconImageHref: item.icon,
					iconImageSize: item.size,
					iconImageOffset: item.offset,
				}
			);
		});

		placemarks.forEach(function (item) {
			map.geoObjects.add(item);
		});
	});
})();