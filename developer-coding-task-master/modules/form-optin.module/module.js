(function ($) { 
    if ($('.hidden-fields').length) {
        $('.hidden-fields').each(function () {
            var hidden = $(this);
            var form = hidden.parents('form').first();
            hidden.hide();
            form.find('.input-email .form control')
                .one('keyup', function() {
                    hidden.slideDown();
                });
    });
    }
})(jQuery);