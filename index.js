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

    $("#MusicianLabel").click(() => {
        console.log('clicked label');
        $("#MusicianContent").toggle("fade");
        $("#MusicianPic").toggle("fade");
    });
    $("#CookLabel").click(() => {
        console.log('clicked label');
        $("#CookContent").toggle("fade");
    });
    $("#PilotLabel").click(() => {
        console.log('clicked label');
        $("#PilotContent").toggle("fade");
        $("#PilotPic").toggle("fade");
    });
    $("#PedalLabel").click(() => {
        console.log('clicked label');
        $("#PedalContent").toggle("fade");
        $("#PedalPic").toggle("fade");
    });
    $("#RateLabel").click(() => {
        console.log('clicked label');
        $("#RateContent").toggle("fade");
    });
    $("#BurgerLabel").click(() => {
        console.log('clicked label');
        $("#BurgerContent").toggle("fade");
    });
});