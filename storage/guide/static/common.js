/***
 * 파일리스트
 */
(function($){
    "use strict";
    var makeFileList = function(){
        var tpl_head = $('#tpl-head').html(),
            tpl_body = $('#tpl-body').html(),
            tpl_head_rendered = Mustache.render(tpl_head, __CONSTANT_HEAD),
            tpl_body_rendered = Mustache.render(tpl_body, __CONSTANT_BODY),
            $listBody = $('#list-body');

        $('#list-head').html(tpl_head_rendered);
        $listBody.html(tpl_body_rendered);

        var $item = $listBody.find('.list-item'),
            _total = $item.length,
            _empty = $item.find('.col-state:empty').length,
            _end = _total-_empty;

        $('#list-info').text('진척률 : '+( (_end/_total)* 100 ) +'%   (' +  _end+ '/' + _total+')');

        $('#list-sch_txt').on('keydown keyup',function(e){
            var sSearchVal = $(this).val();
            $listBody.find('li').hide();
            $listBody.find(':contains('+sSearchVal+')').closest('li').show();
        })
    };

    window.makeFileList = makeFileList;
})(jQuery);

/**
 * 코딩 가이드 네비게이션
 */
(function($){
    "use strict";
    var $tabs = $('.js-tab');
    var changeLayout = function(sPath){
        var $lnb = $('.l-nav'),
            $content = $('#l-content');
        if(sPath == 'list.html'){
            $lnb.hide();
            $content.addClass('listpage');
        } else {
            $lnb.show();
            $content.removeClass('listpage');
        }
        $tabs.find('a[href="'+sPath+'"]').closest('li').addClass('on').siblings().removeClass('on');
    };

    var getPageAjax = function(sPageURL){
        sPageURL = sPageURL || 'list.html';
        $.ajax({
            url: 'html/' + sPageURL,
            cache : false,
            contentType : 'text/plain',
            success: function(data){
                changeLayout(sPageURL);
                $('#l-content').html(data);
            }
        });
    };

    window.onhashchange = function(){
        getPageAjax(location.hash.substr(1));
    };
    onhashchange();

    $tabs.on('click','a',function(e){
        e.preventDefault();
        var $this = $(this);
        $this.closest('li').addClass('on').siblings().removeClass('on');
        location.hash = $this.attr('href');
    });

})(jQuery);

