
$(window).on('load', function () {
    $('.pre-loader .content').fadeOut(500);
    $('.pre-loader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
});
$(document).ready(function () {
    if ($(window).width() <= 991) {
        $('.menubtn').click(function () {
            $(this).toggleClass('open');
            $("._2nd-sec").slideToggle('300');
            $(".lang").toggle();
            $("body").toggleClass("overflow");
        });
        $(".dropmenu").wrap("<div class='drop-xs' />");
        $(".mo-dropdown>.nav-anchor").click(function () {
            $('.drop-xs').slideToggle('300');
            $(this).toggleClass('open');
        })
    }
    var progval = $('.maintenance-progress .progress .progress-bar').attr("aria-valuenow") + "%";
    $(".maintenance-progress .progress .progress-bar").css("width", progval);
    ////////////////// timer
    function makeTimer() {

        var endTimeVal = $('#timer').attr("data-time");
        var endTime = new Date(endTimeVal);
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }


        if (document.dir == 'rtl') {
            $("#days").html(days + "<h6>يوم</h6>");
            $("#hours").html(hours + "<h6>ساعة</h6>");
            $("#minutes").html(minutes + "<h6>دقيقة</h6>");
            $("#seconds").html(seconds + "<h6>ثانية</h6>");
        } else {
            $("#days").html(days + "<h6>Days</h6>");
            $("#hours").html(hours + "<h6>Hours</h6>");
            $("#minutes").html(minutes + "<h6>Minutes</h6>");
            $("#seconds").html(seconds + "<h6>Seconds</h6>");
        }
    }

    setInterval(function () { makeTimer(); }, 1000);

    /////////////////////////////////////////////
    var clientswiper = new Swiper('.client-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.client-slider .swiper-button-next',
            prevEl: '.client-slider .swiper-button-prev',
        },
        pagination: {
            el: '.client-slider .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            },
        },
    });
    var aboutpageclientsswiper = new Swiper('.about-page-clients .swiper-container', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.client-slider .swiper-button-next',
            prevEl: '.client-slider .swiper-button-prev',
        },
        pagination: {
            el: '.client-slider .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 6,
            },
        },
    });
    var teamswiper = new Swiper('.team-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.team-slider .swiper-button-next',
            prevEl: '.team-slider .swiper-button-prev',
        },
        pagination: {
            el: '.team-slider .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
        },
    });

    var postswiper = new Swiper('.post-slider', {
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    ////////////////////////////
    $('.faq-q').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".faq-q").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".faq-q").not(this).siblings().css('max-height', '0');
        $(".faq-q").not(this).siblings().css('padding-top', "0");
    })
    /////////////////////////////////////////
    $(".inputfile").change(function () {
        var file = $('.inputfile')[0].files[0]
        if (file) {
            $(".file-val").html(file.name)
        }
    });
    ////////////////////////////////////////////////////////
    $(".modal-open").click(function () {
        $(".form-modal-cont").fadeIn(200)
        $(".modal-pos").fadeIn(200)
        $(".form-modal").addClass("active")
        $("body").toggleClass("overflow");
    });
    $(".form-modal-cont").click(function () {
        $(".form-modal-cont").fadeOut(400)
        $(".modal-pos").fadeOut(400)
        $(".form-modal").removeClass("active")
        $("body").toggleClass("overflow");
    });
});