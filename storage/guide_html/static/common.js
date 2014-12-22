(function($){
    "use strict";
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
})(jQuery);