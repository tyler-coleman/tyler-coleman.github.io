$(document).ready(() => {

    $("#AboutMeLink").click(function() {
        $(document.body).animate({
            scrollTop: $("#About").offset().top
        }, 700);
    });
    $("#ProjectsLink").click(function() {
        $(document.body).animate({
            scrollTop: $("#Projects").offset().top
        }, 700);
    });
    $("#ResumeLink").click(function() {
        $(document.body).animate({
            scrollTop: $("#Resume").offset().top
        }, 700);
    });
    $("#ContactLink").click(function() {
        $(document.body).animate({
            scrollTop: $("#Contact").offset().top
        }, 700);
    });

    $("#accordion").accordion();
});