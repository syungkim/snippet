var __SUPPORT_AJAX = location.protocol.indexOf('http') != -1 ? true : false;

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
    if($('#list-head').length) makeFileList();

})(jQuery);





(function($){
    /***
     * cloneTextarea
     * textarea 코드를 프린트용 div에 복사
     */
    function cloneTextarea(){
        $('textarea').each(function(e){
            var $textarea = $(this);
            var _tmpCode = '';
            _tmpCode = $textarea.val();
            _tmpCode = _tmpCode.replace(/</g,'&lt').replace(/>/g, '&gt');
            _tmpCode = _tmpCode.replace(/\n/g,'<br>');

            $('<div class="textarea-print" style="display:none">'+_tmpCode+'</div>').insertAfter($textarea);
        });
    }
    cloneTextarea();

    window.cloneTextarea = cloneTextarea;
})(jQuery);



/**
 * 코딩 가이드 네비게이션
 */
(function($){
    "use strict";
    var $lnb = $('.l-nav'),
        $lnb_m = $('#nav-mobile'),
        $content = $('#l-content');

    var getPageAjax = function(sPageURL){
        sPageURL = sPageURL || 'index.html';
        $.ajax({
            url: sPageURL,
            cache : false,
            contentType : 'text/html',
            success: function(data){
                $lnb.find('a[href="'+sPageURL+'"]').closest('li').addClass('on').siblings().removeClass('on');
                $content.html( $(data).find('#l-content').html() );
                $lnb_m.find('option[value="'+sPageURL+'"]').prop('selected',true);
                cloneTextarea();
            }
        });
    };

    //모바일용 셀렉트 LNB 생성
    var makeLnbOption = function(){
        var mobileNavOption = '';
        $('#nav-pc').find('li').each(function(){
            var $this = $(this).find('a'),
                sPageName = $this.text(),
                sPagePath = $this.attr('href');
            mobileNavOption += '<option value="'+sPagePath+'">'+sPageName+'</option>';
        });
        $lnb_m.html(mobileNavOption).on('change',function(){
            if(__SUPPORT_AJAX){
                location.hash = $(this).val();
            } else {
                var _path = location.pathname;
                location.pathname = _path.slice(0, _path.lastIndexOf('/')) + '/'+$(this).val();
            }
        });
    };

    makeLnbOption();

    if(__SUPPORT_AJAX){
        window.onhashchange = function(){
            getPageAjax(location.hash.substr(1));
        };
        onhashchange();

        $lnb.on('click','a',function(e){
            e.preventDefault();
            var $this = $(this);
            $this.closest('li').addClass('on').siblings().removeClass('on');
            location.hash = $this.attr('href');
        });
    }

})(jQuery);


function allPagePrint(){
    "use strict";
    var $content = $('#l-content');
    var aPagelist = [];
    var nCurrentIdx = 0,
        nTotalLen = 0;

    $('#nav-pc').find('a').each(function(){
        aPagelist.push($(this).attr('href'));
    });
    nTotalLen = aPagelist.length;
    $content.empty();
    getHTMLData(nCurrentIdx);

    function getHTMLData(idx){
        $.ajax({
            url: aPagelist[idx],
            cache : false,
            contentType : 'text/html',
            success: function(data){
                if(idx < nTotalLen){
                    $content.append( $(data).find('#l-content').html() );
                    nCurrentIdx = idx+1;
                    getHTMLData(nCurrentIdx);
                } else {
                    cloneTextarea();
                    setTimeout(function(){
                        window.print();
                    },1000);
                }
            }
        });
    }
}

