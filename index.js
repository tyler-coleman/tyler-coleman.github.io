$(document).ready(() => {

    $("#AboutMeLink").click(() => {
        $(document.body).animate({
            scrollTop: $("#About").offset().top
        }, 700);
    });
    $("#ProjectsLink").click(() => {
        $(document.body).animate({
            scrollTop: $("#Projects").offset().top
        }, 700);
    });
    $("#ResumeLink").click(() => {
        $(document.body).animate({
            scrollTop: $("#Resume").offset().top
        }, 700);
    });
    $("#ContactLink").click(() => {
        $(document.body).animate({
            scrollTop: $("#Contact").offset().top
        }, 700);
    });
});