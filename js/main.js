'use strict';

$(document).ready(() => {
    // ** SECTION
    const ht = $(window).height();
    const sec1 = $('#container .sec1');
    sec1.innerHeight(ht);
    const wd = sec1.outerWidth();

    $(window).on("resize", function () {

        sec1.outerHeight(ht);

    });


    // ** NAV
    const min = 0;  // 컨텐츠 기본 top 값
    const max = $(document).height() - $(window).height();
    // 컨텐츠 최대(소) top 값 ( -400 을 초과하면 여백이 올라온다. )

    function getPos() {
        const barTop = $("#bar").css("top");     // 스크롤바의 top값 변수저장
        barTop = parseInt(barTop);             // 실수를 정수로 변환
        const pos = (barTop / 70) * max;  // 스크롤값 - 컨텐츠 top값으로 변환
        $('html, body').scrollTop(pos);
    }

    // 클릭 시 스크롤
    const nav = $('.nav-scroll');
    const menu = $('.nav-menu > span');
    const contents = $('#container section');
    nav.click(function (e) {
        e.preventDefault();

        const tg = $(this);
        const i = tg.index();

        const section = contents.eq(i);
        const tt = section.offset().top;
        $('html, body').stop().animate({ scrollTop: tt }, 700);
    });
    menu.click(function (e) {
        e.preventDefault();

        const tg = $(this).parent();
        const i = tg.index();

        const section = contents.eq(i);
        const tt = section.offset().top;
        $('html, body').stop().animate({ scrollTop: tt }, 700);
    });
    const nextPage = $(".sec1 .next");
    nextPage.click(function () {
        const section = contents.eq(1);
        const tt = section.offset().top;
        $('html, body').stop().animate({ scrollTop: tt }, 700);
    });

    // 스크롤 따라 nav 변화
    const txt1 = $(".sec1 .innerTxt");
    const top1 = (ht - txt1.outerHeight()) / 2;
    $(window).scroll(function () {
        const sct = $(window).scrollTop();
        const scb = sct + ht / 3;
        const maxTop = $(document).height() - ht;
        //        var bt = 70 * (sct/maxTop);
        const v = sct / ht;
        if (v >= 0 && v <= 1) {
            $(".sec1 > .insideBox").css({ 'opacity': 1 - v, 'transform': `rotate(${v * 5}deg)` });
        }


        if (sct >= ht * 0 && scb < ht * 1 - 50) {
            $(".nav-scroll").removeClass('on');
            $(".nav-scroll").eq(0).addClass('on');
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(0).addClass('on');
            $(".sec1 > .insideBox").show().addClass('on');
            txt1.css({ 'top': top1 + (v * 100) });

            $("h3").removeClass('on');

            $(".cont").removeClass("on");
        }
        if (scb >= ht * 1 && scb < $(".sec3").offset().top - 50) {
            $(".nav-scroll").removeClass('on');
            $(".nav-scroll").eq(1).addClass('on');
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(1).addClass('on');
            $(".sec1 > .insideBox").removeClass('on').css({ 'opacity': 0 });

            $("h3").removeClass('on');
            $(".sec2 > h3").addClass('on');

            $(".cont").removeClass("on");
            $(".sec2 .cont").addClass("on");
        }
        if (scb >= $(".sec3").offset().top - 50) {
            $(".nav-scroll").removeClass('on');
            $(".nav-scroll").eq(2).addClass('on');
            $(".nav-menu").removeClass('on');
            $(".nav-menu").eq(2).addClass('on');
            $(".sec1 > .insideBox").removeClass('on').css({ 'opacity': 0 });

            $("h3").removeClass('on');
            $(".sec3 > h3").addClass('on');

            $(".cont").removeClass("on");
            $(".sec3 .cont").addClass("on");
        }

    });
    // NAV ** //


    // ** SECTION ** .sec2 - PROGRESS BAR
    $(".doThis").click(function () {
        $(".doThis").removeClass("show");
        $(this).addClass("show");
        progressBar();
    });

    if (!($(".progress").children('div').hasClass('shadow'))) {
        $(".linear-progress").append("<div class='shadow'></div>");
    } else return;
    progressBar();

    function progressBar() {
        const tit = $(".doThis.show").text();
        const percentage = $(".doThis.show").data("percentage");
        const barwidth = percentage + "%";

        $(".linear-progress .title").text(tit);
        $(".linear-progress .info").text(barwidth);
        $(".linear-progress .bar").stop().animate({ 'width': barwidth });
        $(".linear-progress .shadow").stop().animate({ 'width': barwidth, 'height': 40 });
    }


    // ** SECTION ** //
});
