/****************
 * jqListBox
 * jQuery Custom SelectBox
 * syung2nara@gmail.com
 * update : 2014/01/25
 * version : 1.00
 *****************/
(function($){
	"use strict";

	var isMobile = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		} else {
			return false
		}
	};

	$.fn.jqListBox = function(){

		return this.each(function(index){

			var $this = $(this),
				Len = $this.find('option').length,
				origin_Txt = [],
				origin_Tit = [],
				origin_Val = [],
				IndexZ = 20-index,
				selectedIdx = $this.find('option:selected').index();

			var _className = ($this.data('class')) ? ' '+$this.data('class') : '',
				_idName = ($this.attr('id')) ? 'data-origin="'+$this.attr('id')+'"' : '',
				_selectTitle = ($this.attr('title')) ? 'title="'+$this.attr('title')+'"' : '',
				_originWidth = ($this.data('width')) ? $this.data('width') : $this.width(),
				_maxHeight = ($this.data('maxheight')) ? 'max-height:'+$this.data("maxheight")+'px;' : '';

			$.each($this.find('option'),function(){
				var list = $(this);
				origin_Txt.push( list.text() );
				origin_Val.push( list.val() );
				origin_Tit.push( ( list.attr('title') ) ? list.attr('title') : list.text() );
			});

			var make = {
				el : function(){
					var $listbox = $this.next('.jqListBox'),
						$combo = $listbox.find('.jqListBox-combo > a '),
						$comboTxt = $combo.find('.jqListBox-combo-txt'),
						$comboArrow = $combo.find('.jqListBox-combo-arrow'),
						$list = $listbox.find('.jqListBox-list'),
						$option = $list.find('.jqListBox-option');

					return {
						listbox : $listbox,
						combo : $combo,
						comboTxt : $comboTxt,
						comboArr : $comboArrow,
						list : $list,
						option : $option
					}
				},

				init : function(){
					var _this = this;
					_this.makeHTML();
					_this.setListBoxWidth();
					_this.bindEvent();
					_this.changeOption(selectedIdx);
				},

				makeHTML : function(){
					var html ='';
					var selected = '';

						html +=  '<span class="jqListBox'+_className+'"'+_idName+'style="z-index:'+IndexZ+'" '+_selectTitle+'>';
						html += 	'<span class="jqListBox-combo"><a href="#" data-id="0"><span class="jqListBox-combo-txt">'+origin_Txt[0]+'</span><span class="jqListBox-combo-arrow"></span></a></span>';
						html += 	'<ul class="jqListBox-list" role="listbox" style="display:none;'+_maxHeight+'">';

					for (var i=0;i < Len;i++){
						var title = (origin_Tit[i] != undefined) ? 'title='+origin_Tit[i] : '';
						if (i!=0){
							html += 	'<li class="jqListBox-option" data-id="'+i+'" data-val="'+origin_Val[i]+'" role="option"><a href="#" '+title+'>'+origin_Txt[i]+'</a></li>';
						} else {
							html += 	'<li class="jqListBox-option selected" data-id="'+i+'" data-val="'+origin_Val[i]+'" role="option"><a href="#" '+title+'>'+origin_Txt[i]+'</a></li>';
						}
					}
					html += 	'</ul>';
					html +=  '</span>';

					$this.hide().after(html);
				},

				setListBoxWidth : function(){
					var el = this.el();
					var calWidth = _originWidth - el.comboArr.outerWidth();
					el.comboTxt.width(calWidth);
                    el.list.width(el.combo.width());

				},

				changeOption : function(idx){
					var el = this.el();
					el.option.removeClass('selected').eq(idx).addClass('selected');
					el.combo.attr('data-id',idx).find('.jqListBox-combo-txt').text( origin_Txt[idx] );
					$this.find('option:eq('+idx+')').prop("selected", true).end().change()
				},

				openList : function(){
					var el = this.el();
					el.combo.find('.jqListBox-combo-arrow').addClass('on');
					el.list.slideDown(100,function(){
						el.list.find('.selected > a').focus();
					});
				},

				closeList : function(){
					var el = this.el();
					el.combo.find('.jqListBox-combo-arrow').removeClass('on');
					el.list.slideUp(100);
				},

				bindEvent : function(){
					var root = this;
					var el = this.el();

					el.combo.on({
						'click' : function(e){
							if (el.list.is(':visible'))	{
								root.closeList();
							} else {
								root.openList();
							}
							e.preventDefault();
						},
						'keydown' : function(e){
							if (e.keyCode == 38 || e.keyCode == 40){
								root.openList();
							}
							if (e.keyCode == 9 && e.shiftKey){
								root.closeList();
							}
						}
					});

					el.option.find('>a').on({
						'click' : function(e){
								var id = $(this).closest('li').data('id');
							root.changeOption(id);
							root.closeList();
							el.combo.focus();
							e.preventDefault();
						},
						'keydown' : function(e){
							var $self = $(this).closest('li');
							var idx = $self.index();
							if (e.keyCode == 38){
								if (idx != 0){
									idx--;
								}
								el.option.eq(idx).find('>a').focus();
							}
							if (e.keyCode == 40){
								idx++;
								el.option.eq(idx).find('>a').focus();
							}
							if (e.keyCode == 27){
								root.closeList();
								el.combo.focus();
							}
						}
					});

					el.option.last().find('>a').on({
						'keydown' : function(e){
							if (e.keyCode == 9) {
								if(!e.shiftKey) {
									root.closeList();
								}
							}
						}
					});

					el.listbox.on('mouseleave',function(){
						root.closeList();
					});
				}
			};
			if ($this.is('select')){
				make.init();
			}
			if (isMobile()){
				$this.css({
					'position' : 'absolute',
					'width' : _originWidth,
					'display' : 'block',
					'opacity' : 0
				}).next('.jqListBox').css('z-index','-1');

				$this.change(function(){
					make.changeOption($this.find('option:selected').index());
				})


			}
		});
	};

	$.fn.refresh = function(){
		if ($(this).is('select')){
			return this.each(function(){
				if ($(this).next('.jqListBox').length){
					$(this).next('.jqListBox').remove();
				}
				$(this).jqListBox();
			})
		}
	};
})(jQuery);
