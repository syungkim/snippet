/***********************
 Get URL Parameter

 @example -
 Get object of URL parameters : var allVars = $.getUrlVars();
 Getting URL var by its nam :  	var byName = $.getUrlVar('name');
 ***********************/
$.extend({
	getUrlVars: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlVar: function(name) {
		return $.getUrlVars()[name];
	}
});


/*
 * 예약일과 현재일의 차이 계산
 * 날짜 차이 계산 함수
 * date1 : (미래)기준 날짜(YYYY-MM-DD), date2 : (현재)대상 날짜(YYYY-MM-DD)
 */
function getDateDiff(date1,date2){
	var arrDate1 = date1.split("-");
	var getDate1 = new Date(parseInt(arrDate1[0]),parseInt(arrDate1[1])-1,parseInt(arrDate1[2]));
	var arrDate2 = date2.split("-");
	var getDate2 = new Date(parseInt(arrDate2[0]),parseInt(arrDate2[1])-1,parseInt(arrDate2[2]));

	var getDiffTime = getDate1.getTime() - getDate2.getTime();

	return Math.floor(getDiffTime / (1000 * 60 * 60 * 24));
}

