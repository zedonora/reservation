// 서버 url
const serverUrl = "http://localhost:8080";

// onload 함수
$(document).ready(function () {
	// 선택된 마지막 메뉴
	let lastItem = $("#menu1");

	// 메뉴 클릭시 css
	$("#gnb li").on("click", function () {
		lastItem.toggleClass("active");
		$(this).toggleClass("active");
		lastItem = $(this);
	});

	let rtnData = getImageData();
	let imgCnt = rtnData.items.length - 3 || 0;
	setImage($(".visual_img"), rtnData.items);
	/* Animation: sliding setting */
	$(".visual_img").css("width", $(".visual_img").outerHeight() * imgCnt + "px");
	// width 이미지 갯수만큼 늘리기 - display:inline 으로 한 이유.
	slideShow($(".visual_img"), imgCnt);

	// 각 메뉴의 데이터 값 가져오기
	getFirstMenuData();
});

// ajax 공통함수
function ajax(url, params, callback) {
	$.ajax({
		url: url,
		type: params.type || "post",
		data: params.data,
		async: params.async,
		success: callback,
	});
}

// 파일 데이터 가져오기
function getImageData() {
	// ajax 타입 지정
	let params = {};
	params.type = "get";
	params.async = false;
	let rtnDataAll = {};
	ajax(serverUrl + "/api/promotions", params, function (data) {
		rtnDataAll = data;
	});
	return rtnDataAll;
}

function setImage(targetObj, items) {
	$.each(items, (_, item) => {
		targetObj.append(
			"<li><img src=" + serverUrl + "/file?fileId=" + item.fileId + "></li>"
		);
	});
}

/* Animation: sliding */
function slideShow(imgObj, imgCnt) {
	var curIndex = 0;

	setInterval(() => {
		imgObj.css("transition", "transform 2s ease-out");
		imgObj.css(
			"transform",
			"translate3d(-" + 414 * (curIndex + 1) + "px, 0px, 0px)"
		);
		curIndex++;

		if (curIndex === imgCnt - 3) {
			curIndex = -1;
		}
	}, 2000);
}

function getFirstMenuData() {
	console.log("a");
	console.log("b");
	return;
}
