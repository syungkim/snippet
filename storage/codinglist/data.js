var __CONSTANT_HEAD, __CONSTANT_BODY;

/**
 * 보여줄 칼럼에는 1, 보여주지 않을 칼럼에는 0
 */
__CONSTANT_HEAD = {
    dep1 : 1,
    dep2 : 1,
    dep3 : 1,
    dep4 : 1,
    dep5 : 0,
    url : 1,
    state : 1,
    etc : 1
};

__CONSTANT_BODY = {
    HEAD : __CONSTANT_HEAD,
    getfileName : function () {
        var aURL = this.url.split('/');
        return aURL[aURL.length-1];
    },
    getIndex: function() {
        var _idx = ++window['INDEX']  ||(window['INDEX']=0);
        return _idx+1;
    }
};

/***
 * 아래 리스트 추가
 * 지원 key 값
 *  각 뎁스에 해당하는 key값으로 입력
 */
__CONSTANT_BODY.LIST = [
    //메인
    {
        dep1 : 'Main',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/main/main.html',
        state : 1
    },
    //뷰티포인트안내
    {
        dep1 : '뷰티포인트안내',
        dep2 : '뷰티포인트란',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/intro.html',
        state : 1
    },{
        dep2 : '회원등급안내',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/grade.html',
        state : 1
    },{
        dep2 : '카드안내',
        dep3 : '기본화면',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/card.html',
        state : 1
    },{
        dep3 : '카드신청',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/card_issue.html',
        state : 1
    },{
        dep2 : '포인트안내',
        dep3 : '기본화면',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/point.html',
        state : 1
    },{
        dep3 : '수거 장소및 상세안내',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/point_info.html',
        state : 1
    },{
        dep3 : '수거 품목 안내',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/point_item.html',
        state : 1
    },{
        dep3 : '쿠폰 등록 방법',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/point_coupon.html',
        state : 1
    },{
        dep3 : '포인트 전환',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/coupon/translation.html',
        state : 1
    },{
        dep3 : '뷰티포인트 쿠폰 제공 제품 안내',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/info/point_product.html',
        state : 1
    },
    //뷰티포인트 존
    {
        dep1 : '뷰티포인트 존',
        dep2 : '뷰티포인트 SHOP - 리스트 ',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/beautyzone/shop_list.html',
        state : 1
    },{
        dep2 : '뷰티포인트 SHOP - 상세 ',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/beautyzone/shop_view.html',
        state : 1
    },{
        dep2 : '뷰티포인트 컬렉션 - 리스트',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/beautyzone/collection_list.html',
        state : 1
    },{
        dep2 : '뷰티포인트 컬렉션 - 상세',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/beautyzone/collection_view.html',
        state : 1
    },
    //이벤트
    {
        dep1 : '이벤트',
        dep2 : '뷰티포인트 이벤트',
        dep3 : '리스트',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/event_list_ing.html',
        state : 1
    },{
        dep3 : '상세',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/event_list_view.html',
        state : 1
    },{
        dep2 : '뷰티토크',
        dep3 : '리스트',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/talk_list.html',
        state : 1
    },{
        dep3 : '주관식',
        dep4 : '기본화면',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/talk_view_type1_base.html',
        state : 1
    },{
        dep4 : '내의견보기',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/talk_view_type1_myop.html',
        state : 1
    },{
        dep4 : '내의견없음',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/talk_view_type1_empty.html',
        state : 1
    },{
        dep4 : '내의견수정',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/talk_view_type1_myop_modify.html',
        state : 1
    },{
        dep3 : '객관식',
        dep4 : '기본화면',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/talk_view_type2_base.html',
        state : 1
    },{
        dep4 : '투표종료시',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/talk_view_type2_closed.html',
        etc : '디자인변경'
    },{
        dep2 : '뷰티포인트 서포터즈',
        url : 'http://markup.springworks.co.kr:8080/beauty/content/beauty/html/event/supporter.html',
        etc : '디자인변경'
    }
];