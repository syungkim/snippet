/******************
 * update - 2013-10-26
 *****************/
!function(t){t.fn.makeListBox=function(){return this.each(function(i){var o=t(this),s=o.find("option").length,n=[],e=[],a=[],l=20-i,c=o.attr("data-class")?" "+o.attr("data-class"):"",d=o.attr("id")?o.attr("id"):"",r=o.attr("data-width")?o.attr("data-width"):null;t.each(o.find("option"),function(){var i=t(this);n.push(i.text()),a.push(i.val()),e.push(i.attr("title"))});var f={el:function(){var t=o.next(".listBox"),i=t.find(".listBox-combo > a "),s=i.find(".listBox-combo-txt"),n=t.find(".listBox-list"),e=n.find(".listBox-option");return{listbox:t,combo:i,comboTxt:s,list:n,option:e}},init:function(){this.makeHTML(),this.setListBoxWidth(),this.bindEvent()},makeHTML:function(){var t="";t+='<span class="listBox'+c+'"data-origin="'+d+'" style="z-index:'+l+'">',t+='<span class="listBox-combo"><a href="#" data-id="0"><span class="listBox-combo-txt">'+n[0]+'</span><span class="listBox-combo-arrow"></span></a></span>',t+=o.attr("data-maxHeight")?'<ul class="listBox-list" role="listbox" style="display:none;max-height:'+o.attr("data-maxHeight")+'px">':'<ul class="listBox-list" role="listbox" style="display:none">';for(var i=0;s>i;i++){var r=void 0!=e[i]?"title="+e[i]:"";t+=0!=i?'<li class="listBox-option" data-id="'+i+'" data-val="'+a[i]+'" role="option"><a href="#" '+r+">"+n[i]+"</a></li>":'<li class="listBox-option selected" data-id="'+i+'" data-val="'+a[i]+'" role="option"><a href="#" '+r+">"+n[i]+"</a></li>"}t+="</ul>",t+="</span>",o.hide().after(t)},setListBoxWidth:function(){var t=this.el();r?(t.list.width(r),t.comboTxt.innerWidth(t.list.width()-20)):(t.comboTxt.innerWidth(t.list.width()),t.list.width(t.combo.width()))},changeOption:function(t){var i=this.el();i.option.removeClass("selected").eq(t).addClass("selected"),i.combo.attr("data-id",t).find(".listBox-combo-txt").text(n[t]),o.find("option:eq("+t+")").prop("selected",!0).end().change()},openList:function(){var t=this.el();t.combo.find(".listBox-combo-arrow").addClass("on"),t.list.stop().slideDown(100,function(){t.list.find(".selected > a").focus()})},closeList:function(){var t=this.el();t.combo.find(".listBox-combo-arrow").removeClass("on"),t.list.stop().slideUp(100,function(){t.combo.focus()})},bindEvent:function(){var i=this,o=this.el();o.combo.on({click:function(t){o.list.is(":visible")?i.closeList():i.openList(),t.preventDefault()},keydown:function(t){(38==t.keyCode||40==t.keyCode)&&i.openList()}}),o.option.find(">a").on({click:function(o){var s=t(this).closest("li").attr("data-id");i.changeOption(s),i.closeList(),o.preventDefault()},keydown:function(i){var s=t(this).closest("li"),n=s.index();38==i.keyCode&&(0!=n&&n--,o.option.eq(n).find(">a").focus()),40==i.keyCode&&(n++,o.option.eq(n).find(">a").focus())}}),o.option.last().find(">a").on({keydown:function(t){9==t.keyCode&&(t.shiftKey||i.closeList())}}),o.list.on("mouseleave",function(){i.closeList()})}};f.init()})},t.fn.refreshListBox=function(){return this.each(function(){t(this).next(".listBox").length&&t(this).next(".listBox").remove(),t(this).makeListBox()})}}(jQuery);