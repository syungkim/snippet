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

/**
 * <button data-hook="nav-menu-toggle video-pause click-track">Toggle Nav Menu</button>
 * $.hook('nav-menu-toggle').on('click', toggleNavMenu);
 */
$.extend({
    hook: function(hookName) {
        var selector;
        if(!hookName || hookName === '*') {
            // select all data-hooks
            selector = '[data-hook]';
        } else {
            // select specific data-hook
            selector = '[data-hook~="' + hookName + '"]';
        }
        return $(selector);
    }
});