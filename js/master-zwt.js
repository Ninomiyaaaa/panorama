(function () {

    //页面加载时根据.now切换当前标题
    if ($('.title-list li.now').length > 0) {
        let nowIndex = $('.title-list li.now').index();
        $('.title-list').css('left', -544 * nowIndex);
    }


    //导航按钮切换效果
    function addToggle(className) {
        $(className).on('click', function () {
            $(this).addClass('active').siblings(className).removeClass('active');
        });
    }


    //数字动画
    function countNum(speed) {
        let easingFn = function (t, b, c, d) {
            let ts = (t /= d) * t;
            let tc = ts * t;
            return b + c * (tc + -3 * ts + 3 * t);
        }

        let countOptions = {
            useEasing: true,
            easingFn: easingFn,
            useGrouping: true,
            separator: ',',
            decimal: '.',
        }

        $.each($('.number'), function (index, elem) {
            $(elem).attr('id', 'number' + index);
            let floatNum = $(elem).text().split('.');
            //小数位数
            let dotCount = 0;
            if (floatNum[1]) {
                dotCount = $(elem).text().split('.')[1].length;
            }
            new CountUp('number' + index, 0, $(elem).text(), dotCount, speed, countOptions).start();
        });
    }

    countNum(1.5);


    //点击箭头切换标题
    $('.icon-arrow').on('click', function () {
        if (!$('.title-list').is(':animated')) {
            let nowPosition = Number.parseInt($('.title-list').css('left'));
            let offset = 0;
            if ($(this).hasClass('prev')) {
                if (nowPosition >= 0) {
                    return;
                }
                offset = 544;
            }
            else if ($(this).hasClass('next')) {
                if (Math.abs(nowPosition) >= 544 * ($('.title-list>li').length - 1)) {
                    return;
                }
                offset = -544;
            }

            $('.title-list').animate({
                'left': nowPosition + offset
            }, 350);
        }
    });


    //轮次详情列表展开收起
    $('.button-nav.detail').on('click', function () {
        if (!$('.rounds-list').hasClass('open')) {
            $('.rounds-list').slideDown(250).addClass('open');
            return;
        }
        $('.rounds-list').slideUp(250).removeClass('open');
    });


    $(window).on('resize', function () {
        location.reload();
    });

}());