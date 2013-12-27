var DOM = {}

DOM.fileAttach:function(){
	var fileAtta = $('.fileAttach');
	fileAtta.find('.fileAttach-button').click(function(e){
		$(this).siblings('.fileAttach-file').click();
		e.preventDefault();
	});

	fileAtta.find('.fileAttach-file').on('change',function(e){
		var valArray = $(this).val().split('\\');
		$(this).siblings('.fileAttach-text').val(valArray[valArray.length-1]);
	});
}