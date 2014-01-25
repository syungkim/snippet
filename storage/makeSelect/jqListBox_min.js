/****************
 * jqListBox
 * jQuery Custom SelectBox
 * syung2nara@gmail.com
 * update : 2014/01/24
 * version : 1.00
 *****************/
!function(t){"use strict";var i=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?!0:!1};t.fn.jqListBox=function(){return this.each(function(o){var e=t(this),s=e.find("option").length,n=[],a=[],c=[],d=20-o,l=e.find("option:selected").index(),r=e.data("class")?" "+e.data("class"):"",f=e.attr("id")?'data-origin="'+e.attr("id")+'"':"",h=e.attr("title")?'title="'+e.attr("title")+'"':"",x=e.data("width")?e.data("width"):e.width(),p=e.data("maxheight")?"max-height:"+e.data("maxheight")+"px;":"";t.each(e.find("option"),function(){var i=t(this);n.push(i.text()),c.push(i.val()),a.push(i.attr("title")?i.attr("title"):i.text())});var u={el:function(){var t=e.next(".jqListBox"),i=t.find(".jqListBox-combo > a "),o=i.find(".jqListBox-combo-txt"),s=i.find(".jqListBox-combo-arrow"),n=t.find(".jqListBox-list"),a=n.find(".jqListBox-option");return{listbox:t,combo:i,comboTxt:o,comboArr:s,list:n,option:a}},init:function(){var t=this;t.makeHTML(),t.setListBoxWidth(),t.bindEvent(),t.changeOption(l)},makeHTML:function(){var t="";t+='<span class="jqListBox'+r+'"'+f+'style="z-index:'+d+'" '+h+">",t+='<span class="jqListBox-combo"><a href="#" data-id="0"><span class="jqListBox-combo-txt">'+n[0]+'</span><span class="jqListBox-combo-arrow"></span></a></span>',t+='<ul class="jqListBox-list" role="listbox" style="display:none;'+p+'">';for(var i=0;s>i;i++){var o=void 0!=a[i]?"title="+a[i]:"";t+=0!=i?'<li class="jqListBox-option" data-id="'+i+'" data-val="'+c[i]+'" role="option"><a href="#" '+o+">"+n[i]+"</a></li>":'<li class="jqListBox-option selected" data-id="'+i+'" data-val="'+c[i]+'" role="option"><a href="#" '+o+">"+n[i]+"</a></li>"}t+="</ul>",t+="</span>",e.hide().after(t)},setListBoxWidth:function(){var t=this.el(),i=x-t.comboArr.outerWidth();t.comboTxt.width(i),t.list.width(t.combo.width())},changeOption:function(t){var i=this.el();i.option.removeClass("selected").eq(t).addClass("selected"),i.combo.attr("data-id",t).find(".jqListBox-combo-txt").text(n[t]),e.find("option:eq("+t+")").prop("selected",!0).end().change()},openList:function(){var t=this.el();t.combo.find(".jqListBox-combo-arrow").addClass("on"),t.list.slideDown(100,function(){t.list.find(".selected > a").focus()})},closeList:function(){var t=this.el();t.combo.find(".jqListBox-combo-arrow").removeClass("on"),t.list.slideUp(100)},bindEvent:function(){var i=this,o=this.el();o.combo.on({click:function(t){o.list.is(":visible")?i.closeList():i.openList(),t.preventDefault()},keydown:function(t){(38==t.keyCode||40==t.keyCode)&&i.openList(),9==t.keyCode&&t.shiftKey&&i.closeList()}}),o.option.find(">a").on({click:function(e){var s=t(this).closest("li").data("id");i.changeOption(s),i.closeList(),o.combo.focus(),e.preventDefault()},keydown:function(e){var s=t(this).closest("li"),n=s.index();38==e.keyCode&&(0!=n&&n--,o.option.eq(n).find(">a").focus()),40==e.keyCode&&(n++,o.option.eq(n).find(">a").focus()),27==e.keyCode&&(i.closeList(),o.combo.focus())}}),o.option.last().find(">a").on({keydown:function(t){9==t.keyCode&&(t.shiftKey||i.closeList())}}),o.listbox.on("mouseleave",function(){i.closeList()})}};e.is("select")&&u.init(),i()&&(e.css({position:"absolute",width:x,display:"block",opacity:0}).next(".jqListBox").css("z-index","-1"),e.change(function(){u.changeOption(e.find("option:selected").index())}))})},t.fn.refresh=function(){return t(this).is("select")?this.each(function(){t(this).next(".jqListBox").length&&t(this).next(".jqListBox").remove(),t(this).jqListBox()}):void 0}}(jQuery);