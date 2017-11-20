(function($) {
    $.fn.slideShow = function(settings) {

        settings = $.extend({ message: '<p class="clickMe">Click slides to progress through presentation</p>' }, settings);
        var list = $(this);
        var listItems = list.children('.slide');
        var listHeight = $(listItems).css('height');
        var listWidth = $(listItems).css('width');

        $(listItems).addClass('go');
        $(listItems).last().addClass('stop').removeClass('go');

        list.append(listItems.get().reverse());

        $(listItems).first().append('<p class="clickMe">' + settings.message + '</p>');

        $('.clickMe').css({
            'font-size': '12px',
            'line-height': '12px',
            'font-weight': 'normal',
            'text-align': 'center',
            'position': 'absolute',
            'bottom': '0px',
            'background': 'rgba(255,255,255,.45)',
            'padding': '10px 0 20px 0',
            'margin': '0px',
            'width': '100%'
        });

        $(list).css({
            'height': listHeight,
            'overflow': 'hidden',
            'position': 'relative'
        });
        $('.slide').css({
            'width': listWidth,
            'position': 'absolute',
            'top': '0px',
            'left': '0px',
            'cursor': 'pointer'
        });

        $('.go').on('click', function() {
            $(this).fadeOut(250);
        });

        $('.stop').on('click', function() {
            $('.go').fadeIn(250);
        });

    };
})(jQuery);

$('.taco').slideShow();