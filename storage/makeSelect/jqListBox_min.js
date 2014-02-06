/****************
 * jqListBox
 * jQuery Custom SelectBox
 * iam@syung.kr
 * update : 2014/02/06
 * version : 1.01
 *****************/
!function(t){"use strict";var i=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?!0:!1};t.fn.jqListBox=function(){return this.each(function(o){var e=t(this),n=e.find("option").length,s=[],a=[],c=[],l=20-o,d=e.find("option:selected").index(),r=e.data("class")?" "+e.data("class"):"",f=e.attr("id")?'data-origin="'+e.attr("id")+'"':"",h=e.attr("title")?'title="'+e.attr("title")+'"':"",p=e.data("width")?e.data("width"):e.width(),u=e.data("maxheight")?"max-height:"+e.data("maxheight")+"px;":"";t.each(e.find("option"),function(){var i=t(this);s.push(i.text()),c.push(i.val()),a.push(i.attr("title")?i.attr("title"):i.text())});var x={el:function(){var t=e.next(".jqListBox"),i=t.find(".jqListBox-combo > a "),o=i.find(".jqListBox-combo-txt"),n=i.find(".jqListBox-combo-arrow"),s=t.find(".jqListBox-list"),a=s.find(".jqListBox-option");return{listbox:t,combo:i,comboTxt:o,comboArr:n,list:s,option:a}},init:function(){var t=this;t.makeHTML(),t.setListBoxWidth(),t.bindEvent(),t.changeOption(d)},makeHTML:function(){var t="";t+='<span class="jqListBox'+r+'"'+f+'style="z-index:'+l+'" '+h+">",t+='<span class="jqListBox-combo"><a href="#" data-id="0"><span class="jqListBox-combo-txt">'+s[0]+'</span><span class="jqListBox-combo-arrow"></span></a></span>',t+='<ul class="jqListBox-list" role="listbox" style="display:none;'+u+'">';for(var i=0;n>i;i++){var o=void 0!=a[i]?"title="+a[i]:"";t+=0!=i?'<li class="jqListBox-option" data-id="'+i+'" data-val="'+c[i]+'" role="option"><a href="#" '+o+">"+s[i]+"</a></li>":'<li class="jqListBox-option selected" data-id="'+i+'" data-val="'+c[i]+'" role="option"><a href="#" '+o+">"+s[i]+"</a></li>"}t+="</ul>",t+="</span>",e.hide().after(t)},setListBoxWidth:function(){var t=this.el(),i=p-t.comboArr.outerWidth();t.comboTxt.width(i),t.list.width(t.combo.width())},changeOption:function(t){var i=this.el();i.option.removeClass("selected").eq(t).addClass("selected"),i.combo.attr("data-id",t).find(".jqListBox-combo-txt").text(s[t]),e.find("option:eq("+t+")").prop("selected",!0).end().change()},openList:function(){var t=this.el();t.combo.find(".jqListBox-combo-arrow").addClass("on"),t.list.slideDown(100,function(){t.list.find(".selected > a").focus()})},closeList:function(){var t=this.el();t.combo.find(".jqListBox-combo-arrow").removeClass("on"),t.list.slideUp(100)},bindEvent:function(){var i=this,o=this.el(),e=o.option.length;o.combo.on({click:function(t){o.list.is(":visible")?i.closeList():i.openList(),t.preventDefault()},keydown:function(t){var i=o.option.filter(".selected").index();38==t.keyCode&&(i>0&&o.option.eq(i-1).find("a").click(),t.preventDefault()),40==t.keyCode&&(e>i&&o.option.eq(i+1).find("a").click(),t.preventDefault())}}),o.option.find(">a").on({click:function(e){var n=t(this).closest("li").data("id");i.changeOption(n),i.closeList(),o.combo.focus(),e.preventDefault()},keydown:function(e){var n=t(this).closest("li"),s=n.index();38==e.keyCode&&(0!=s&&s--,o.option.eq(s).find(">a").focus(),e.preventDefault()),40==e.keyCode&&(s++,o.option.eq(s).find(">a").focus(),e.preventDefault()),27==e.keyCode&&(i.closeList(),o.combo.focus())}}),o.option.last().find(">a").on({keydown:function(t){9==t.keyCode&&(t.shiftKey||i.closeList())}}),o.listbox.on("mouseleave",function(){i.closeList()})}};e.is("select")&&x.init(),i()&&(e.css({position:"absolute",width:p,display:"block",opacity:0}).next(".jqListBox").css("z-index","-1"),e.change(function(){x.changeOption(e.find("option:selected").index())}))})},t.fn.refresh=function(){return t(this).is("select")?this.each(function(){t(this).next(".jqListBox").length&&t(this).next(".jqListBox").remove(),t(this).jqListBox()}):void 0}}(jQuery);