$(document).ready(function () {
	let lastItem = $("#menu1");
	$("#gnb li").on("click", function () {
		lastItem.toggleClass("active");
		$(this).toggleClass("active");
		lastItem = $(this);
	});
});
