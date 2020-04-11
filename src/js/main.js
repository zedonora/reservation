$(document).ready(function () {
	let lastItem = $("#menu1");
	$("#gnb li").on("click", function () {
		lastItem.toggleClass("active");
		$(this).toggleClass("active");
		lastItem = $(this);
	});

	var imgCnt = 0;
	/* Animation: sliding setting */
	image_ul.querySelectorAll("li").forEach(() => {
		imgCnt++;
	});
	image_ul.style.width = image_ul.offsetWidth * imgCnt + "px";
	// width 이미지 갯수만큼 늘리기 - display:inline 으로 한 이유.

	//console.log(imgCnt);
	//console.log(image_ul.style.width);
	slideShow($(".visual_img"), imgCnt);
});

/* Animation: sliding */
function slideShow(imgObj, imgCnt) {
	var curIndex = 0;

	setInterval(() => {
		imgObj.style.transition = "transform 2s ease-out";
		imgObj.style.transform =
			"translate3d(-" + 414 * (curIndex + 1) + "px, 0px, 0px)";
		curIndex++;

		console.log(curIndex);
		if (curIndex === imgCnt - 1) {
			curIndex = -1;
		}
	}, 2000);
}
