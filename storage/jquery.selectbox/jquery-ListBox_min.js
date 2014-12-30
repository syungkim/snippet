/****************
 * jqListBox
 * jQuery Custom SelectBox
 * iam@syung.kr
 * update : 2014/03/22
 * version : 1.04
 *****************/
!function(t){"use strict";var e=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?!0:!1}();t.fn.jqListBox=function(){return this.each(function(o){var i=t(this),a=i.find("option").length,s=[],n=[],c=[],l=20-o,r=i.find("option:selected").index(),d=i.data("class")?" "+i.data("class"):"",p=i.attr("id")?'data-origin="'+i.attr("id")+'"':"",f=i.attr("title")?'title="'+i.attr("title")+'"':"",u=i.data("width")?i.data("width"):i.width(),x=i.data("maxheight")?"max-height:"+i.data("maxheight")+"px;":"";t.each(i.find("option"),function(){var e=t(this);s.push(e.text()),c.push(e.val()),n.push(e.attr("title")?e.attr("title"):e.text())});var b={el:function(){var t=i.next(".jqListBox"),e=t.find(".jqListBox-combo"),o=e.find(".jqListBox-combo-txt"),a=e.find(".jqListBox-combo-arrow"),s=t.find(".jqListBox-list"),n=s.find(".jqListBox-option");return{listbox:t,combo:e,comboTxt:o,comboArr:a,list:s,option:n}},init:function(){var t=this;t.make(),t.bind(),t.change(r),e&&t.mobileType()},make:function(){var t="";t+='<span class="jqListBox'+d+'"'+p+'style="z-index:'+l+'" '+f+">",t+='<span class="jqListBox-combo" id="jqListBox-combo-'+o+'" tabindex="0" role="combobox" aria-autocomplete="list" aria-owns="jqListBox-list-'+o+'"><span class="jqListBox-combo-txt" data-id="0">'+s[0]+'</span><span class="jqListBox-combo-arrow"></span></span>',t+='<ul class="jqListBox-list" id="jqListBox-list-'+o+'"role="listbox" aria-hidden="false" role="listbox" aria-labelledby="jqListBox-combo-'+o+'" aria-expanded="false" style="display:none;'+x+'">';for(var e=0;a>e;e++)t+=0!=e?'<li class="jqListBox-option" id="jqListBox-option-'+o+"-"+e+'" data-id="'+e+'" data-val="'+c[e]+'"role="option" tabindex="0">'+s[e]+"</li>":'<li class="jqListBox-option selected" id="jqListBox-option-'+o+"-"+e+'" data-id="'+e+'" data-val="'+c[e]+'" role="option" tabindex="0">'+s[e]+"</li>";t+="</ul>",t+="</span>",i.hide().after(t),this.setWidth()},setWidth:function(){var t=this.el(),e=parseInt(u-t.comboArr.outerWidth(),10);t.comboTxt.width(e),t.list.width(t.combo.width())},change:function(t){var e=this.el();e.option.removeClass("selected").eq(t).addClass("selected"),e.combo.find(".jqListBox-combo-txt").attr("data-id",t).text(s[t]),e.combo.attr("aria-activedescendant",e.option.eq(t).attr("id")),i.find("option:eq("+t+")").prop("selected",!0).end().change()},open:function(){var t=this.el();t.combo.find(".jqListBox-combo-arrow").addClass("on"),t.list.slideDown(100,function(){t.list.find(".selected").focus()}).attr("aria-expanded","true")},close:function(){var t=this.el();t.combo.focus().find(".jqListBox-combo-arrow").removeClass("on"),t.list.slideUp(100).attr("aria-expanded","false")},mobileType:function(){var e=this.el();i.css({position:"absolute",width:u,display:"block",opacity:0}).next(".jqListBox").css("z-index","-1"),i.change(function(){var o=t(this).find("option:selected").index();e.option.removeClass("selected").eq(o).addClass("selected"),e.combo.find(".jqListBox-combo-txt").attr("data-id",o).text(s[o])})},bind:function(){var e=this,o=this.el(),i=o.option.length;o.combo.on({click:function(t){o.list.is(":visible")?e.close():e.open(),t.preventDefault()},keydown:function(t){var s=o.option.filter(".selected").index();if(t.altKey){if(t.altKey)switch(t.keyCode){case 38:case 40:e.open()}}else switch(t.keyCode){case 13:t.preventDefault();break;case 27:e.close();break;case 32:e.open();break;case 33:s>=3?o.option.eq(s-3).click():o.option.eq(0).click(),t.preventDefault();break;case 34:a>s+3?o.option.eq(s+3).click():o.option.eq(a-1).click(),t.preventDefault();break;case 35:o.option.eq(-1).click(),t.preventDefault();break;case 36:o.option.eq(0).click(),t.preventDefault();break;case 37:case 38:s>0&&o.option.eq(s-1).click(),t.preventDefault();break;case 39:case 40:i>s&&o.option.eq(s+1).click(),t.preventDefault()}}}),o.option.on({click:function(i){var a=t(this).data("id");e.change(a),e.close(),o.combo.focus(),i.preventDefault()},keydown:function(i){var s=t(this).data("id");if(i.altKey){if(i.altKey)switch(i.keyCode){case 38:case 40:e.close()}}else switch(i.keyCode){case 13:case 32:t(this).click(),i.preventDefault();break;case 27:e.close(),o.combo.focus();break;case 33:s>=3?o.option.eq(s-3).focus():o.option.eq(0).focus(),i.preventDefault();break;case 34:a>=s+3?o.option.eq(s+3).focus():o.option.eq(a-1).focus(),i.preventDefault();break;case 35:o.option.eq(-1).focus(),i.preventDefault();break;case 36:o.option.eq(0).focus(),i.preventDefault();break;case 37:case 38:0!=s&&s--,o.option.eq(s).focus(),i.preventDefault();break;case 39:case 40:s++,o.option.eq(s).focus(),i.preventDefault()}}}),o.option.last().on({keydown:function(t){9==t.keyCode&&(t.shiftKey||e.close())}}),o.listbox.on("mouseleave",function(){e.close()})}};i.is("select")&&b.init()})},t.fn.refresh=function(){return t(this).is("select")?this.each(function(){t(this).next(".jqListBox").length&&t(this).next(".jqListBox").remove(),t(this).jqListBox()}):void 0}}(jQuery);