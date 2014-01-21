/*
* 번들코드 규칙
* 버전_단말_위치_개별명칭_01 
* v1_pc_main_topmenu_01
* 
* <img class="bundleImg" data-alt="v1_pc_main_quick_03" src="../images/main/go03_ko.gif" alt="폐회식 예매 바로가기" />
* <a href="faq.html"><script type="text/javascript">getBundle('v1_pc_common_topmenu_08')</script></a>
*
*/
var lang = $('html').attr('lang');
var messageBundleJson = { 
	'v1_pc_common_topmenu_01' : {'ko' : 'OK티켓홈', 'en' : ' '},
	'v1_pc_common_topmenu_02' : {'ko' : '로그인', 'en' : ' '},
	'v1_pc_common_topmenu_03' : {'ko' : '회원가입', 'en' : ' '},
	'v1_pc_common_topmenu_04' : {'ko' : '로그아웃', 'en' : ' '},
	'v1_pc_common_topmenu_05' : {'ko' : '마이페이지', 'en' : ' '},
	'v1_pc_common_topmenu_06' : {'ko' : '예매확인', 'en' : ' '},
	'v1_pc_common_topmenu_07' : {'ko' : 'OK티켓이용안내', 'en' : ' '},
	'v1_pc_common_topmenu_08' : {'ko' : 'FAQ', 'en' : ' '},

	'v1_pc_main_dDay_01' : {'ko' : '아시안게임 개막', 'en' : ' '},

	'v1_pc_main_quick_01' : {'ko' : '전체종목보기', 'en' : ' '},
	'v1_pc_main_quick_02' : {'ko' : '개회식 예매 바로가기', 'en' : ' '},
	'v1_pc_main_quick_03' : {'ko' : '폐회식 예매 바로가기', 'en' : ' '},

	'v1_pc_main_event_01' : {'ko' : '수영', 'en' : ' '},
	'v1_pc_main_event_02' : {'ko' : '다이빙', 'en' : ' '},
	'v1_pc_main_event_03' : {'ko' : '싱크로나이즈드', 'en' : ' '},
	'v1_pc_main_event_04' : {'ko' : '수구', 'en' : ' '},
	'v1_pc_main_event_05' : {'ko' : '카누', 'en' : ' '},
	'v1_pc_main_event_06' : {'ko' : '조정', 'en' : ' '},
	'v1_pc_main_event_07' : {'ko' : '요트', 'en' : ' '},
	'v1_pc_main_event_08' : {'ko' : '야구', 'en' : ' '},
	'v1_pc_main_event_09' : {'ko' : '축구', 'en' : ' '},
	'v1_pc_main_event_10' : {'ko' : '농구', 'en' : ' '},
	'v1_pc_main_event_11' : {'ko' : '배구', 'en' : ' '},
	'v1_pc_main_event_12' : {'ko' : '볼링', 'en' : ' '},
	'v1_pc_main_event_13' : {'ko' : '크리켓', 'en' : ' '},
	'v1_pc_main_event_14' : {'ko' : '배드민턴', 'en' : ' '},
	'v1_pc_main_event_15' : {'ko' : '골프', 'en' : ' '},
	'v1_pc_main_event_16' : {'ko' : '핸드볼', 'en' : ' '},
	'v1_pc_main_event_17' : {'ko' : '하키', 'en' : ' '},
	'v1_pc_main_event_18' : {'ko' : '럭비', 'en' : ' '},
	'v1_pc_main_event_19' : {'ko' : '세팍타크로', 'en' : ' '},
	'v1_pc_main_event_20' : {'ko' : '테니스', 'en' : ' '},
	'v1_pc_main_event_21' : {'ko' : '탁구', 'en' : ' '},
	'v1_pc_main_event_22' : {'ko' : '스쿼시', 'en' : ' '},
	'v1_pc_main_event_23' : {'ko' : '태권도', 'en' : ' '},
	'v1_pc_main_event_24' : {'ko' : '유도', 'en' : ' '},
	'v1_pc_main_event_25' : {'ko' : '레슬링', 'en' : ' '},
	'v1_pc_main_event_26' : {'ko' : '펜싱', 'en' : ' '},
	'v1_pc_main_event_27' : {'ko' : '복싱', 'en' : ' '},
	'v1_pc_main_event_28' : {'ko' : '공수도', 'en' : ' '},
	'v1_pc_main_event_29' : {'ko' : '우슈', 'en' : ' '},
	'v1_pc_main_event_30' : {'ko' : '카바디', 'en' : ' '},
	'v1_pc_main_event_31' : {'ko' : '근대5종', 'en' : ' '},
	'v1_pc_main_event_32' : {'ko' : '트라이애슬론', 'en' : ' '},
	'v1_pc_main_event_33' : {'ko' : '육상', 'en' : ' '},
	'v1_pc_main_event_34' : {'ko' : '승마', 'en' : ' '},
	'v1_pc_main_event_35' : {'ko' : '사격', 'en' : ' '},
	'v1_pc_main_event_36' : {'ko' : '양궁', 'en' : ' '},
	'v1_pc_main_event_37' : {'ko' : '역도', 'en' : ' '},

	'v1_pc_common_copyright_01' : {'ko' : 'Copyright © 2014 Inchon AsianGame All Rights Reserved.','en' : 'Copyright © 2014 Inchon AsianGame All Rights Reserved.'}
	
}; 
function getBundle(key, img){ 
	var value;
	
	try{
		value = messageBundleJson[key][lang];
	}
	catch (e){ }

    if(key && key != ""){ 
        if(!value){return "N/K";} 
    } else { 
        value = ""; 
    } 

	if (!img){
		return document.write(value); 
	} else {
		return value;
	}
    
} 

function bundleImg(obj,lang){
	
	var imgSrc = obj.attr("src").split('_');
	var changeLang = imgSrc[imgSrc.length-1].replace(/[a-z][a-z]/,lang);
	imgSrc[imgSrc.length-1] = changeLang;
	imgSrc = imgSrc.join('_');
	obj.attr("src",imgSrc);
	obj.attr("alt",getBundle( obj.attr('data-alt') , 'img' ));
}

$(function(){
	$('.bundleImg').each(function(){
		bundleImg($(this),lang);
	})
});
