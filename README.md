# java -jar reservation.jar

# java -jar reservation.jar --server.port=9090

# https://www.edwith.org/boostcourse-web-reviewer-fe/project/95/content/79#summary

# A. 모든 프로모션(Promotion) 정보 보기

# check

GET /api/promotions
결과
{
"size": 11,
"items": [
{
"id": 1,
"productId": 1,
"categoryId": 1,
"categoryName": "전시",
"description": "Paper, Present:너를 위한 선물",
"fileId": 61
},
......

        {
        	"id": 11,
        	"productId": 44,
        	"categoryId": 5,
        	"categoryName": "연극",
        	"description": "어바웃 머니\n",
        	"fileId": 172
        }
    ]

}

B. 모든 카테고리(Category) 목록 보기
GET /api/categories

{
"size": 5,
"items": [
{
"id": 1,
"name": "전시",
"count": 10
},
{
"id": 2,
"name": "뮤지컬",
"count": 10
},
{
"id": 3,
"name": "콘서트",
"count": 10
},
{
"id": 4,
"name": "클래식",
"count": 10
},
{
"id": 5,
"name": "연극",
"count": 10
}
]
}

C. 프로덕트(Product) 목록 보기
GET /api/products
위의 요청에 다음과 같은 파라미터가 있을 수 있습니다.
categoryId : 카테고리 id
start : 몇번째 데이터부터 가지고 올 것인지 값을 지정

Ex> product 목록 보기 – 최대 4건이 보여짐(productCount). 총 수(totalCount)
GET /api/products
Ex> 5번째 자료부터 4건 가져오기
GET /api/products?categoryId=1&start=5
Ex> categoryId 가 1인 경우의 product 목록 보기
GET /api/products?categoryId=1
Ex> categoryId가 1이고 5번째 자료부터 4건 가져오기
GET /api/products?categoryId=1&start=5

Ex> GET /api/products?categoryId=5&start=5

{
"totalCount": 13,
"productCount": 4,
"products": [
{
"id": 45,
"categoryId": 5,
"displayInfoId": 52,
"name": "연극",
"description": "보잉보잉 공연\n",
"content": "웃다가 기절하는 연극\n관람 연령대의 한계가 없는 연극\n썸남썸녀라면 꼭 봐야하는 연극",
"event": "",
"openingHours": "2017.12.23~26",
"placeName": "광주문화예술회관 소극장",
"placeLot": "광주광역시 북구 운암동 328-16",
"placeStreet": "광주광역시 북구 북문대로 60\n",
"tel": "070-4279-5071",
"homepage": "http://www.lscompany.co.kr\n",
"email": "",
"createDate": "2018-12-09 16:23:01.567",
"modifyDate": "2018-12-09 16:23:01.567",
"fileId": 176
},
{
"id": 45,
"categoryId": 5,
"displayInfoId": 53,

             	"name": "연극",
        	"description": "보잉보잉 공연\n",
     	   "content": "웃다가 기절하는 연극\n관람 연령대의 한계가 없는 연극\n썸남썸녀라면 꼭 봐야하는 연극",
        	"event": "",
        	"openingHours": "2017.12.17.Fri ~ 12.31.Sun",
        	"placeName": "문화예술전용극장 CT\n",
        	"placeLot": "대구광역시 중구 남일동 109-2 제일빌딩 지하 1층",
    	    "placeStreet": "대구광역시 중구 중앙대로 394\n",
        	"tel": "053-252-5733\n",
        	"homepage": "",
        	"email": "",
        	"createDate": "2018-12-09 16:23:01.567",
        	"modifyDate": "2018-12-09 16:23:01.567",
        	"fileId": 176
    	},
    	{
        	"id": 46,
        	"categoryId": 5,
        	"displayInfoId": 54,
        	"name": "연극",
        	"description": "연극 THE HELMET(더 헬멧)\n",
        	"content": "어디서도 본 적 없지만 빠져들게 될 당신의‘첫 번째’ 연극!\n\n대학로 창작 연극의 저력을 보여주며, 올해로 10주년을 맞이한 연극 <모범생들>\n극장 이곳 저곳을 다니며 극장과 롤 플레잉 게임 형식을 접목한 관객 참여 형 연극 <씨어터 RPG>\n특정된 공간 안에서 벌어지는 세 가지의 독립된 에피소드 선보인 카포네, 벙커 트릴로지 시리즈\n파격적인 구성과 신선한 아이디어를 접목해 공연을 만들어 온 창작 연극의 자존심, 최고의 콤비!\n작가 지이선X연출 김태형과 함께 혁신적인 공연 형식을 성공적으로 선보여온 아이엠컬처의 창작 신작!\n",
        	"event": "",
        	"openingHours": "공연일시 :2017년 12월 19일(화)~2018년 3월 4일\n공연시간 :화-금 8시, 9시 30분 /\n토, 일,공휴일 3시, 5시, 7시 30분 (월 공연 없음)\n* 12/25(월) 공연 있음,12/26(화) 공연 없음\n12/27(수) 마티네 5시30분,\n1/1(월) 공연 있음 , 1/2(화) 공연 없음",
     	   "placeName": "대학로 아트원씨어터 3관",
        	"placeLot": "서울특별시 종로구 동숭동 1-181",


        	"placeStreet": "서울특별시 종로구 대학로12길 83 SW빌딩\n",
        	"tel": "02-541-2929\n",
        	"homepage": "",
        	"email": "",
        	"createDate": "2018-12-09 16:23:01.567",
        	"modifyDate": "2018-12-09 16:23:01.567",
        	"fileId": 180
    	},
    	{
        	"id": 47,
        	"categoryId": 5,
        	"displayInfoId": 55,
        	"name": "연극",
        	"description": "연극 밀레니엄 소년단\n",
        	"content": "1999년 12월 31일 밤,\n고등학교 1학년인 네 명의 친구가 밀레니엄을 맞이하는 순간, 작은 녹음기에 녹음을 시작한다.\n\n상처받은 과거와 보이지않는 미래 때문에 아프기도 하지만, 네 사람은 진정한 우정을 꿈꾸며 지금의 불안과 두려움을 떨치고 앞으로 나아갈 수 있으리라 믿는다.\n\n그러나 2000년이 다 지나기도 전에, 친구들의 우정은 보이지 않는 금이 가기 시작하고, 그 중 한명이 뜻하지 않은 사고로 뇌사 상태에 빠진다. 2012년 뇌사 상태에 빠졌던 친구가 깨어나 모두 다시 모이게 되자, 팍팍한 현실, 변해버린 관계 속에서 이들은 자꾸 어긋나기만 하는 데...\n\n그때 우리는\n지구의 멸망을 이겨낸 용사들, 밀레니엄 소년단이었습니다.\n",
        	"event": "",
        	"openingHours": "2017.11.24~2018.2.4",
        	"placeName": "5층 동숭소극장\n",
        	"placeLot": "서울특별시 종로구 동숭동 1-5",
        	"placeStreet": "서울특별시 종로구 동숭길 122 동숭아트센타\n",
        	"tel": "02-744-4331\n",
        	"homepage": "",
        	"email": "",
        	"createDate": "2018-12-09 16:23:01.568",
        	"modifyDate": "2018-12-09 16:23:01.568",
        	"fileId": 182
    	}
    ]

}

3.        정적 컨텐츠 요청
    A. 이미지 요청
    fileId 에 해당하는 이미지를 다음과 같이 요청한다.
    예)
    GET /file?fileId=145

B. CSS 요청
GET /css/mainpage.css
GET /css/style.css
