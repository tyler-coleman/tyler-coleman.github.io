$(document).ready(() => {

    let activeSectionId = 'About';

    $(".AboutMeLink").click(() => {

        $(document.body).animate({
            scrollTop: $("#" + activeSectionId).offset().top
        });

        if (activeSectionId === 'About') {
            $(document.body).animate({
                scrollTop: $("#About").offset().top
            });
        } else {
            $("#" + activeSectionId).hide("drop", 300, () => {
                $("#About").show("fade", 300);
            });
            
            activeSectionId = 'About';
        }
    });

    $(".ProjectsLink").click(() => {

        $(document.body).animate({
            scrollTop: $("#" + activeSectionId).offset().top
        });

        if (activeSectionId === 'Projects') {
            $(document.body).animate({
                scrollTop: $("#Projects").offset().top
            });
        } else {
            $("#" + activeSectionId).hide("drop", 300, () => {
                $("#Projects").show("fade", 300);
            });
            
            activeSectionId = 'Projects';
        }
    });

    $(".ResumeLink").click(() => {

        $(document.body).animate({
            scrollTop: $("#" + activeSectionId).offset().top
        });

        if (activeSectionId === 'Resume') {
            $(document.body).animate({
                scrollTop: $("#Resume").offset().top
            });
        } else {
            $("#" + activeSectionId).hide("drop", 300, () => {
                $("#Resume").show("fade", 300);
            });
            
            activeSectionId = 'Resume';
        }
    });

    $(".ContactLink").click(() => {
        $(document.body).animate({
            scrollTop: $("#Contact").offset().top
        }, 700);
    });

    $("#MusicianLabel").click(() => {
        $("#MusicianContent").toggle("fade");
        $("#MusicianPic").toggle("fade");
    });
    $("#CookLabel").click(() => {
        $("#CookContent").toggle("fade");
    });
    $("#PilotLabel").click(() => {
        $("#PilotContent").toggle("fade");
        $("#PilotPic").toggle("fade");
    });
    $("#PedalLabel").click(() => {
        $("#PedalContent").toggle("fade");
        $("#PedalPic").toggle("fade");
    });
    $("#RateLabel").click(() => {
        $("#RateContent").toggle("fade");
    });
    $("#BurgerLabel").click(() => {
        $("#BurgerContent").toggle("fade");
    });

    $("#Toggle").click(() => {
        $("#Overlay").toggle("fade");
        $(".Sidebar").toggle("slide");
    });

    $("#Overlay").click(() => {
        $("#Overlay").hide("fade");
        $(".Sidebar").hide("slide");
    });
});