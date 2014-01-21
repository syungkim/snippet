/****************
 * jQuery Custom SelectBox
 * listBox
 * update : 2013/10/26
 *****************/
(function($){
	$.fn.makeListBox = function(){
		return this.each(function(index){

			var $this = $(this),
				Len = $this.find('option').length,
				origin_Txt = [],
				origin_Tit = [],
				origin_Val = [],
				IndexZ = 20-index;

			var className = ($this.attr('data-class')) ? ' '+$this.attr('data-class') : '',
				idName = ($this.attr('id')) ? $this.attr('id') : '';

			$.each($this.find('option'),function(){
				var list = $(this);
				origin_Txt.push( list.text() );
				origin_Val.push( list.val() );
				origin_Tit.push( list.attr('title') );
			});

			var make = {
				el : function(){
					var $listbox = $this.next('.listBox'),
						$combo = $listbox.find('.listBox-combo > a '),
						$comboTxt = $combo.find('.listBox-combo-txt'),
						$list = $listbox.find('.listBox-list'),
						$option = $list.find('.listBox-option');

					return {
						listbox : $listbox,
						combo : $combo,
						comboTxt : $comboTxt,
						list : $list,
						option : $option
					}
				},

				init : function(){
					this.makeHTML();
					this.setListBoxWidth();
					this.bindEvent();
				},

				makeHTML : function(){
					var html ='';
					var selected = '';

						html +=  '<span class="listBox'+className+'"data-origin="'+idName+'" style="z-index:'+IndexZ+'">';
						html += 	'<span class="listBox-combo"><a href="#" data-id="0"><span class="listBox-combo-txt">'+origin_Txt[0]+'</span><span class="listBox-combo-arrow"></span></a></span>';

					if (!$this.attr('data-maxHeight')){
						html += 	'<ul class="listBox-list" role="listbox" style="display:none">';
					} else {
						html += 	'<ul class="listBox-list" role="listbox" style="display:none;max-height:'+$this.attr('data-maxHeight')+'px">';
					}

					for (var i=0;i < Len;i++){
						var title = (origin_Tit[i] != undefined) ? 'title='+origin_Tit[i] : '';
						if (i!=0){
							html += 	'<li class="listBox-option" data-id="'+i+'" data-val="'+origin_Val[i]+'" role="option"><a href="#" '+title+'>'+origin_Txt[i]+'</a></li>';
						} else {
							html += 	'<li class="listBox-option selected" data-id="'+i+'" data-val="'+origin_Val[i]+'" role="option"><a href="#" '+title+'>'+origin_Txt[i]+'</a></li>';
						}
					}
					html += 	'</ul>';
					html +=  '</span>';

					$this.hide().after(html);
				},

				setListBoxWidth : function(){
					var el = this.el();
                    el.comboTxt.innerWidth(el.list.width());
                    el.list.width(el.combo.width())
				},

				changeOption : function(idx){
					var el = this.el();
					el.option.removeClass('selected').eq(idx).addClass('selected');
					el.combo.attr('data-id',idx).find('.listBox-combo-txt').text( origin_Txt[idx] );
					$this.find('option:eq('+idx+')').prop("selected", true).end().change()
				},

				openList : function(){
					var el = this.el();
					el.combo.find('.listBox-combo-arrow').addClass('on');
					el.list.stop().slideDown(100,function(){
						el.list.find('.selected > a').focus();
					});
				},

				closeList : function(){
					var el = this.el();
					el.combo.find('.listBox-combo-arrow').removeClass('on');
					el.list.stop().slideUp(100,function(){
						el.combo.focus();
					});
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
						}
					});

					el.option.find('>a').on({
						'click' : function(e){
								var id = $(this).closest('li').attr('data-id');
							root.changeOption(id);
							root.closeList();
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

					el.list.on('mouseleave',function(){
						root.closeList();
					});
				}
			};
			make.init();
		});
	};

	$.fn.refreshListBox = function(){
		return this.each(function(){
			if ($(this).next('.listBox').length){
				$(this).next('.listBox').remove();
			}
			$(this).makeListBox();
		})
	};
})(jQuery);
