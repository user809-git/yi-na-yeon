$(document).ready(function(){
    // ** SECTION
    var ht = $(window).height();
    var content = $('#container section');
    content.height(ht);
    var wd = content.outerWidth();

    $(window).on("resize", function(){
        var ht = $(window).height();
        content.height(ht);
        
        // 자동 새로고침
        var ww = content.outerWidth();
        if (wd > 1024) {
            if (ww <= 1024) {
                location.reload();
                $("html, body").stop().animate({'scrollTop':0});
            }
        } else if (wd <= 1024 && wd >= 768) {
            if (ww > 1024) {
                location.reload();
                $("html, body").stop().animate({'scrollTop':0});
            } else if (ww < 768) {
                location.reload();
                $("html, body").stop().animate({'scrollTop':0});
            }
        } else if (wd < 768) {
            if (ww >= 768) {
                location.reload();
                $("html, body").stop().animate({'scrollTop':0});
            }
        } else return
        
        // SECTION sec3
        if (wd < 1900) {
            var add = 1900 - ww;
            
            if (ww > 1024) {
                $(".sec3 .ex").css({'margin-top': (ht * 0.2) + add/10});
            } else return
           
        } else $(".sec3 .ex").css({'margin-top': ht * 0.2});
    });
    
    
    // ** NAV
    // 스크롤 따라 넘김 jquery-ui.min.js
    $("#bar").draggable({axis:'y',containment:'parent'});
    $("#bar").on("drag",function(event, ui){
      getPos()
    });

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
        $('html, body').stop().animate({scrollTop:tt}, 700);
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
        $('html, body').stop().animate({scrollTop:tt}, 700);
    });
    
    // 스크롤 따라 nav 변화
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        var maxTop = $(document).height() - $(window).height();
        var bt = 70 * (sct/maxTop);
        
        $(".nav-bar").css({'top': bt});
        if(sct >= ht*0 && sct < ht*1-100){
            //$(".nav-bar").stop().animate({top: 0}, 700);
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(0).addClass('on');
            $(".sec1 > .insideBox").show().addClass('on');
            
            $("h3").removeClass('on');
            
            $(".cont").removeClass("on");
        }
        if(sct >= ht*1 && sct < ht*2-100){
            //$(".nav-bar").stop().animate({top: 35}, 700);
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(1).addClass('on');
            $(".sec1 > .insideBox").removeClass('on').hide();
            
            $("h3").removeClass('on');
            $(".sec2 > h3").addClass('on');
            
            $(".cont").removeClass("on");
            $(".sec2 .cont").addClass("on");
        }
        if(sct >= ht*2 && sct < ht*3-100){
            //$(".nav-bar").stop().animate({top: 70}, 700);
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(2).addClass('on');
            $(".sec1 > .insideBox").removeClass('on').hide();
            
            $("h3").removeClass('on');
            $(".sec3 > h3").addClass('on');
            
            $(".cont").removeClass("on");
            $(".sec3 .cont").addClass("on");
        }
        
    });
    // NAV ** //
    
    
    
    // ** SECTION ** .sec2 - PROGRESS BAR
    $(".doThis").click(function(){
        $(".doThis").removeClass("show");
        $(this).addClass("show");
        progressBar();
    });
    
    $(".linear-progress .back").append("<div class='shadow'></div>");
    progressBar();
    
    function progressBar() {
        var tit = $(".doThis.show").text();
        var percentage = $(".doThis.show").data("percentage");
        var barwidth = percentage + "%";
        
        $(".linear-progress .title").text(tit);
        $(".linear-progress .info").text(barwidth);
        $(".linear-progress .bar").stop().animate({'width': barwidth});
        $(".linear-progress .shadow").stop().animate({'width': barwidth, 'height':40});
    }
    
    
    // ** SECTION ** .sec3 - PROJECT EXAMPLE
    $(".showCase li").each(function() {
        var num = $(this).data("number");
        var Txt = $(this).text();
        
//        if($("section").outerWidth() > 1024) {
            var showCase = '<div class="innerCase">'
                        + '<img class="mainImg img2" src="img/portfolio'+ num +'-main.jpg" alt="user809-git.github.io/portfolio' + num +'">'
                        + '<img class="pin" src="img/on-light.png">'
                        + '<div class="innerTxt">'
                        + ' <span>' + Txt + '</span>'
                        + ' <a href="https://user809-git.github.io/portfolio' + num + '/" target="_blank"><i class="fas fa-external-link-alt"></i></a>'
                        + '</div>'
                        + '</div>';
        
            $(this).html(showCase);
            
//        } else {
//            var showCase = '<div class="innerCase">'
//                        + '<img class="mainImg img2" src="img/portfolio'+ num +'-mobile.jpg" alt="user809-git.github.io/portfolio' + num +'">'
//                        + '<img class="pin" src="img/on-light-one.png">'
//                        + '<div class="innerTxt">'
//                        + ' <span>' + Txt + '</span>'
//                        + ' <a href="https://user809-git.github.io/portfolio' + num + '/" target="_blank"><i class="fas fa-external-link-alt"></i></a>'
//                        + '</div>'
//                        + '</div>';
//        
//            $(this).html(showCase);
//        }
        
    });
    
    var cur = 0;
    var listend = $(".showCase li").length - 1;
    $(".arr .left").click(function(){
        var cur = $(".showCase .center").index();
        if(cur < 0) cur = listend;
        cur--;
        
        var prev = cur - 1;
        var next = cur + 1;
              
        $(".showCase li").removeClass("left center right");
        $(".showCase li").eq(prev).addClass("left").css({'left':'-50%'}).stop().animate({'left':'0%'});
        $(".showCase li").eq(cur).addClass("center").css({'left':0}).stop().animate({'left':'50%'});
        $(".showCase li").eq(next).addClass("right").css({'left':'50%'}).stop().animate({'left':'100%'});
    });
    $(".arr .right").click(function(){
        var cur = $(".showCase .center").index();
        
        cur++;
        if(cur > listend) cur = 0;
        
        var prev = cur - 1;
        var next = cur + 1;
        if(next == $(".showCase li").length) next = 0;
        
        $(".showCase li").removeClass("left center right");
        $(".showCase li").eq(prev).addClass("left").css({'left':'50%'}).stop().animate({'left':'0%'});
        $(".showCase li").eq(cur).addClass("center").css({'left':'100%'}).stop().animate({'left':'50%'});
        $(".showCase li").eq(next).addClass("right").css({'left':'150%'}).stop().animate({'left':'100%'});
    });
    
    // ** SECTION ** //
});











