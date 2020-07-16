$(document).ready(function(){
    var ht = $(window).height();
    var section = $("section");
    section.height(ht);

    $(window).on("resize", function(){
        var ht = $(window).height();
        section.height(ht);
    });
    
    
    // 스크롤 따라 넘김
    //
    
    // 클릭 시 스크롤
    var nav = $('.nav-scroll');
    var menu = $('.nav-menu > span');
    var content = $('#container section');
    nav.click(function(e){
        e.preventDefault();

        var tg = $(this);
        var i = tg.index();
//        $(".nav-bar").stop().animate({top:i * 35}, 1000);
//        $(".nav-menu").removeClass('on');
//        $(".nav-menu").eq(i).addClass('on');

        var section = content.eq(i);
        var tt = section.offset().top;
        $('html, body').stop().animate({scrollTop:tt}, 1000);
    });
    menu.click(function(e){
        e.preventDefault();

        var tg = $(this).parent();
        var i = tg.index();
//        $(".nav-bar").stop().animate({top:i * 35}, 1000);
//        $(".nav-menu").removeClass('on');
//        $(".nav-menu").eq(i).addClass('on');

        var section = content.eq(i);
        var tt = section.offset().top;
        $('html, body').stop().animate({scrollTop:tt}, 1000);
    });
    
    // 스크롤 따라 nav 변화
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        
        console.log(sct);
        if(sct >= ht*0 && sct < ht*1-100){
            //$(".nav-bar").stop().animate({top: 0}, 700);
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(0).addClass('on');
        }
        if(sct >= ht*1 && sct < ht*2-100){
            //$(".nav-bar").stop().animate({top: 35}, 700);
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(1).addClass('on');
        }
        if(sct >= ht*2 && sct < ht*3-100){
            //$(".nav-bar").stop().animate({top: 70}, 700);
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(2).addClass('on');
        }
    });
    
    
    // drag scroll bar 만들기
    
    
});





