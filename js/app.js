jQuery(document).ready(function ($) {
    //    var isLateralNavAnimating = false
    //open & close lateral navigation
    //    $('.cd-nav-trigger').on('click', function (event) {
    //        event.preventDefault();
    //        //stop if nav animation is running
    //        if (!isLaterNavAnimating) {
    //            if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;
    //
    //            $('body').toggleClass('navigation-is-open');
    //            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
    //                //animation is over
    //                isLateralNavAnimating = false;
    //            });
    //        }
    //    });
    $('.cd-nav-trigger').on('click', function () {
        $('.cd-navigation-wrapper').toggleClass('anim0');
        $('.cd-nav-trigger').toggleClass('anim50');;
        $('.bot').toggleClass('anim100');
    });
});
