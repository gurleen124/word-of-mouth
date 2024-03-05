// onclick card theme change
$(document).ready(function () {
    $("body").addClass('default');
    // nav link active
    $(".btn").click(function () {
        $('.btn').removeClass("active");
        $(this).addClass("active");
        // body class change
        var text = $(".btn.active").find(".theme-text").html();
        $('body').removeClass();
        $('body').addClass(text);
    });
});