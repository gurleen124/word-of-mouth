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
    $(".nav-tabs li a").click(function(){
        $('.tab-pane div.container').toggleClass('d-none');
    });
    $("section.features div a").click(function(){
        $(this).siblings('p').toggleClass('d-none');
    });
});