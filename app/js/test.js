$(document).ready(function () {

	// Прокрутка вниз
	// $(".header_mobile__link a, .footer__link a").on("click", function () {

	// 	var currentBlock = $(this).attr("href"),
	// 		currentBlockOffset = $(currentBlock).offset().top;
	// 	$("html, body").animate({
	// 		scrollTop: currentBlockOffset - 1
	// 	}, 500);
	// });

	// Прокрутка вниз
  $(".footer__link a").on("click", function (e) {
    e.preventDefault();
    var currentBlock = $(this).attr("href"),
      currentBlockOffset = $(currentBlock).offset().top;
    $("html, body").animate({
      scrollTop: currentBlockOffset - 1
    }, 500);
  });

});