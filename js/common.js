/******************
 * Javascript Libs Import
 ******************/
(function(){
	var imports=[
		'bom.js',
		'dom.js',
		'accessibility.js'
	];

	for(var a=0, atotal=imports.length; a<atotal; a++){
		document.write('<script src="'+imports[a]+'?cb='+new Date().getTime()+'" charset="utf-8"></'+'script>');
	}
})();

/**
 * form validator Func
 * only Number
 * @param obj target
 * @param event
 * @example
 * 	onkeyup="onlyNum(this)"
 */
function onlyNum(obj,event){
	var num_regx=/^[0-9]*$/;
	if( !num_regx.test(obj.value) ) {
		alert('숫자만 입력하실 수 있습니다.');
		obj.value = obj.value.substring(0, obj.value.length-1 );
	}
}

/**
 * form validator Func
 * only number & 0 over
 * @param obj
 * @param event
 * @example
 * 	onkeyup="onlyCount(this)"
 */
function onlyCount(obj,event){
	if (obj.value.length == 1 && obj.value == 0){
		alert('1이상의 숫자만 입력하실 수 있습니다.');
		obj.value = obj.value.substring(0, obj.value.length-1 );
	} else {
		var num_regx=/^[0-9]*$/;
		if( !num_regx.test(obj.value) ) {
			alert('숫자만 입력하실 수 있습니다.');
			obj.value = obj.value.substring(0, obj.value.length-1 );
		}
	}
}
/**
 * form validator Func
 * gt lt not
 * @param obj
 * @example
 * 	onkeydown="chkLtGt(this)"
 */
function chkLtGt(obj){
	var key = event.keyCode;

	if (event.shiftKey){
		if (key == 188 || key == 190){
			alert('<, > 키는 입력하실 수 없습니다');
			setTimeout(function(){
				obj.value = obj.value.substring(0, obj.value.length-1);
			},50);
		}
	}
}

/**
 * Validator Func
 * UserID input Chk
 * @param targetValue {string}
 * @returns {boolean}
 */
function chkUserId(targetValue){
	var _id = targetValue;
	var isStr = /^.*(?=.{6,20})(?=.*[a-zA-Z])(?=.*[0-9]).*$/;
	var isMark = /^.*(?=.*\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=\{|\}|\[|\]|\;|\'|\:|\"|\<|\>|\?|\,|\.|\/|\`).*$/;
	var isErr = false;

	for (i = 0; i < _id.length; i++) {
		var retCode = _id.charCodeAt(i)
		var retChar = _id.substr(i,1).toUpperCase()
		retCode = parseInt(retCode)

		if ( (retChar < "0" || retChar > "9") && (retChar < "A" || retChar > "Z") && ((retCode > 255) || (retCode < 0)) ) {
			isErr = true;
			break;
		} else if(isMark.test(_id)) {
			isErr = true;
			break;
		}
	}

	if (_id.length < 6){
		return false;
	} else if(isErr || !isStr.test(_id)){
		return false;
	} else {
		return true;
	}

}

/**************
 * Validator Func
 * UserPass input Check
 * @param targetValue {string}
 * @returns {boolean}
 */
function chkUserPass(targetValue){
	var _pw = targetValue;

	if ( _pw.length < 6 ){
		return false;
	} else {
		if(!pw_chk(_pw)){
			return false;
		} else {
			//정상
			return true;
		}
	}

	function pw_chk(str) {
		var isEngNum = /^.*(?=.{6,20})(?=.*[a-zA-Z])(?=.*[0-9]).*$/;
		var isEngMark = /^.*(?=.{6,20})(?=.*[a-zA-Z])(?=.*[\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\~]).*$/;
		var isMarkNum = /^.*(?=.*[\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\~])(?=.*[0-9]).*$/;
		var isNoMark = /^.*(?=.*\[|\]|\{|\}|\:|\"|\;|\'|\<|\>|\?|\,|\.|\/|\\s).*$/;
		var isWhiteSpace = /\s/;

		if (isWhiteSpace.test(str)){
			return false
		}
		if ( isEngNum.test(str) && !isNoMark.test(str) ) {
			return true;
		}
		if ( isEngMark.test(str) && !isNoMark.test(str) ) {
			return true;
		}
		if ( isMarkNum.test(str) && !isNoMark.test(str) ) {
			return true;
		}
		return false;
	}
}

/******************************
 * getRandomInArray
 * 배열에서 지정한 갯수만큼 랜덤하게 추출
 * @param arr {array}
 * @param getLen {int}
 * @returns {string}
 *********************************/
function getRandomInArray(arr,getLen){
	var totalArr = arr;
	var tempArr = [];
	var result = '';

	while (result.length < getLen){
		var idx  = Math.floor( Math.random() * totalArr.length );
		tempArr.push( totalArr[idx] );
		totalArr.splice(idx,1);
	}

	result = tempArr.sort().join(',');

	return result;

}
/************************************
 * getRandomNumber
 * 지정한 최대값 아래로 랜덤하게 리턴
 * @param endRange {int}
 * @returns {number}
 ***********************************/
function getRandomNumber(endRange){
	var randomNumber = Math.ceil( Math.random() * endRange );
	return randomNumber;
}