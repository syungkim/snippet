/*********************
 * Get URL Parameter Value
 * @returns {{}}
 * getUrlParam()["type"];
 * 현재 파라미터에서 값 추출
 **********************/
function getUrlParam() {
	var vars = {};
	var parts = location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
		function(m,key,value) {
			vars[key] = decodeURIComponent(value);
		});
	return vars;
}

/*********************
 * sortByParam func
 * @param targetParam {string} param.key
 * @param data	{string}	param.value
 * @param options {boolean}
 * 현재 파라미터에 값 추가 / 제거
 *********************/
function sortByParam(targetParam, data, options){
	var __param = location.search.substr(1);
	var tmpArr  = __param.split('&');

	if (__param.length){
		$.each(tmpArr, function(index){
			if ( tmpArr[index].indexOf(targetParam) != -1 ){
				tmpArr.splice(index,1);
				return false;
			}
		});
		var resultParam = tmpArr.join('&');
		resultParam = (resultParam.length) ? '&'+resultParam : '';
		if (options == 'delete'){
			location.href = __path+'?'+ (resultParam).substr(1);
		} else {
			location.href = __path+'?'+ targetParam+'='+ data + resultParam;
		}
	} else {
		location.href = __path+'?'+targetParam+'='+data;
	}
}

/**
 * 예약일과 현재일의 차이 계산
 * @param date1 : (미래)기준 날짜(YYYY-MM-DD)
 * @param date2 : (현재)대상 날짜(YYYY-MM-DD)
 * @returns {number}
 * @example :  getDateDiff('2014-01-01','2013-12-31');
 */
function getDateDiff(date1,date2){
	var arrDate1 = date1.split("-");
	var getDate1 = new Date(parseInt(arrDate1[0]),parseInt(arrDate1[1])-1,parseInt(arrDate1[2]));
	var arrDate2 = date2.split("-");
	var getDate2 = new Date(parseInt(arrDate2[0]),parseInt(arrDate2[1])-1,parseInt(arrDate2[2]));

	var getDiffTime = getDate1.getTime() - getDate2.getTime();

	return Math.floor(getDiffTime / (1000 * 60 * 60 * 24));
}

/***
 * 날짜 계산 함수
 * @param targetDate : 기준 날짜(Date 형)
 * @param dayPrefix : : 계산할 일수(정수형)
 * @returns {Date}
 * @example
 * 	var dateObj = new Date();
 	var diffDate = getAddDay(dateObj,-2);
 */

function getAddDay(targetDate, dayPrefix)
{
	var newDate = new Date( );
	var processTime = targetDate.getTime()+(parseInt(dayPrefix)*24*60*60*1000);
	newDate.setTime(processTime);
	return newDate;
}