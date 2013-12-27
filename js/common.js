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