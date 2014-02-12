/****************
 * jqModal
 * jQuery Custom LayerPopup
 * iam@syung.kr
 * update : 2014/02/06
 * version : 1.00
 *****************/
var ___ROOT_PAST_FOCUS_ELEM = null;
(function($){
	$.fn.jqModal = function(targetLayerID){
		var $origin = ___ROOT_PAST_FOCUS_ELEM = $(this),
			$this = $(targetLayerID),
			focusable = [],
			el_firstFocus, el_lastFocus;

		$this.find('*').each(function(i, val) {
			if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
				focusable.push(val);
			}
			if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
				focusable.push(val);
			}
		});
		el_firstFocus = focusable[0];
		el_lastFocus = focusable[focusable.length-1];

		$(document).on({
			'keydown' : function(e){
				var keyCode = e.keyCode || e.which;
				if (keyCode == 27){
					closeModal();
					$(document).off('keydown');
				}
			}
		});

		$(el_firstFocus).on({
			'keydown' : function(e){
				if (e.target == this){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (e.shiftKey){
							$(el_lastFocus).focus();
							e.preventDefault();
						}
					}
				}
			}
		});

		$(el_lastFocus).on({
			'keydown' : function(e){
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey){
						$(el_firstFocus).focus();
						e.preventDefault();
					}
				}
			}
		});

		$this.find("[data-dismiss='modal']").click(function(e){
			closeModal();
			e.preventDefault();
		});

		function closeModal(){
			$('body').removeClass('modal-opened').off('touchmove');
			$origin.focus();
			$this.hide();
		}

		function setModalPosition(target){
			var $modalBody = target.find('.modal-dialog');
			var _width = $modalBody.width(),
				_height = $modalBody.height();
			$modalBody.css({
				'marginTop' : _height/2 * -1,
				'marginLeft' : _width/2 * -1
			})
		}

		$this.show().find($(el_firstFocus)).focus();
		setModalPosition($this);
		$('body').addClass('modal-opened').on('touchmove', function(e){e.preventDefault()});

	};

	$.jqModal_close = function(){
		var $target = $(document).find('.modal:visible');
		$target.each(function(){
			$('body').removeClass('modal-opened').off('touchmove');
			___ROOT_PAST_FOCUS_ELEM.focus();
			$(this).hide();
		});
	};
})(jQuery);