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

