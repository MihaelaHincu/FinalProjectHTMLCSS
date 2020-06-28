$(".expand").on("click", function () {
    $(".right-arrow").text("⮟");
    $(".detail:visible").slideUp();
    if (!$(this).next().is(":visible")) {

        $(this).next().slideDown(200);
        $(this).find(".right-arrow").text("⮝");
    }
});

function hamburgerNav() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


var num = 90; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navigation').addClass('fixed');
    } else {
        $('.navigation').removeClass('fixed');
    }
});