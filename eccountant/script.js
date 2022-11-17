$(window).scroll(function () {
    if ($(this).csrollTop() > 1600) {
        $('.pageup').fadein();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function () {
    const_href = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});