$(document).ready(function(){
    // ** SECTION
    var ht = $(window).height();
    var sec1 = $('#container .sec1');
    sec1.innerHeight(ht);
    var wd = sec1.outerWidth();

    $(window).on("resize", function(){
        
        sec1.outerHeight(ht);
        
    });
    
    
    // ** NAV
    var min = 0;  // 컨텐츠 기본 top 값
    var max = $(document).height() - $(window).height();
    // 컨텐츠 최대(소) top 값 ( -400 을 초과하면 여백이 올라온다. )

    function getPos(){
      var barTop = $("#bar").css("top");     // 스크롤바의 top값 변수저장
      barTop = parseInt(barTop);             // 실수를 정수로 변환
      var pos = (barTop/70) * max;  // 스크롤값 - 컨텐츠 top값으로 변환
      $('html, body').scrollTop(pos);
    }
    
    // 클릭 시 스크롤
    var nav = $('.nav-scroll');
    var menu = $('.nav-menu > span');
    var contents = $('#container section');
    nav.click(function(e){
        e.preventDefault();

        var tg = $(this);
        var i = tg.index();
        
        var section = contents.eq(i);
        var tt = section.offset().top;
        $('html, body').stop().animate({scrollTop:tt}, 700);
    });
    menu.click(function(e){
        e.preventDefault();

        var tg = $(this).parent();
        var i = tg.index();

        var section = contents.eq(i);
        var tt = section.offset().top;
        $('html, body').stop().animate({scrollTop:tt}, 700);
    });
    var nextPage = $(".sec1 .next");
    nextPage.click(function(){
        var section = contents.eq(1);
        var tt = section.offset().top;
        $('html, body').stop().animate({scrollTop:tt}, 700);
    });
    
    // 스크롤 따라 nav 변화
    const txt1 = $(".sec1 .innerTxt");
    const top1 = (ht - txt1.outerHeight())/2;
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        var scb = sct + ht/3;
        var maxTop = $(document).height() - ht;
//        var bt = 70 * (sct/maxTop);
        var v = sct/ht;
        if(v >= 0 && v <= 1) {
            $(".sec1 > .insideBox").css({'opacity':1-v});
        }
        
        
        if(sct >= ht*0 && scb < ht*1-50){
            $(".nav-scroll").removeClass('on');
            $(".nav-scroll").eq(0).addClass('on');
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(0).addClass('on');
            $(".sec1 > .insideBox").show().addClass('on');
            txt1.css({'top': top1 + (v*100)});
            
            $("h3").removeClass('on');
            
            $(".cont").removeClass("on");
        }
        if(scb >= ht*1 && scb < $(".sec3").offset().top-50){
            $(".nav-scroll").removeClass('on');
            $(".nav-scroll").eq(1).addClass('on');
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(1).addClass('on');
            $(".sec1 > .insideBox").removeClass('on').css({'opacity':0});
            
            $("h3").removeClass('on');
            $(".sec2 > h3").addClass('on');
            
            $(".cont").removeClass("on");
            $(".sec2 .cont").addClass("on");
        }
        if(scb >= $(".sec3").offset().top-50){
            $(".nav-scroll").removeClass('on');
            $(".nav-scroll").eq(2).addClass('on');
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(2).addClass('on');
            $(".sec1 > .insideBox").removeClass('on').css({'opacity':0});
            
            $("h3").removeClass('on');
            $(".sec3 > h3").addClass('on');
            
            $(".cont").removeClass("on");
            $(".sec3 .cont").addClass("on");
        }
        
    });
    // NAV ** //
    
    
    // ** SECTION ** .sec1 - PROFILE CARD
    
    
    // ** SECTION ** .sec2 - PROGRESS BAR
    $(".doThis").click(function(){
        $(".doThis").removeClass("show");
        $(this).addClass("show");
        progressBar();
    });
    
    if( !($(".progress").children('div').hasClass('shadow')) ) {
        $(".linear-progress").append("<div class='shadow'></div>");
    } else return
    progressBar();
    
    function progressBar() {
        var tit = $(".doThis.show").text();
        var title = '<img >';
        var percentage = $(".doThis.show").data("percentage");
        var barwidth = percentage + "%";
        
        $(".linear-progress .title").text(tit);
        $(".linear-progress .info").text(barwidth);
        $(".linear-progress .bar").stop().animate({'width': barwidth});
        $(".linear-progress .shadow").stop().animate({'width': barwidth, 'height':40});
    }
    
    
    // ** SECTION ** .sec3 - PROJECT EXAMPLE
    $(".pages li").each(function() {
        var num = $(this).data("number");
        var urls = $(this).data("urls");
        var info = $(this).data("info");
        var Txt = $(this).text();
        
            var eachPages = '<div class="innerCase">'
                        + '<a href="' + urls + '" target="_blank">'
                        + '<img class="mainImg" src="img/portfolio'+ num +'-main.jpg">'
                        + '<div class="innerTxt">'
                        + ' <span>' + Txt + '</span>'
                        + ' <span class="urls">' + urls + '</span>'
                        + '</div>'
                        + ' <div class="status">'
                        + ' <p class="info">' + info + '</p>'
                        + ' <p class="use">HTML5, CSS3, Javascript, jQuery</p>'
                        + ' <i class="fas fa-plus-circle link-icon"></i>'
                        + '</div>'
                        + '</a>'
                        + '</div>';
        
            $(this).html(eachPages);
        
    });
    
    console.log();
    // ** SECTION ** //
});











