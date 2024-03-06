// onclick card theme change
$(document).ready(function () {
    $("body").addClass('default');
    // nav link active
    $(".theme").click(function () {
        $('.theme').removeClass("active");
        $(this).addClass("active");
        // body class change
        var text = $(".theme.active").find(".theme-text").html();
        $('body').removeClass();
        $('body').addClass(text);
    });
});