$(document).ready(() => {

    let activeSectionId = 'About';

    $("#AboutMeLink").click(() => {

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

    $("#ProjectsLink").click(() => {

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

    $("#ResumeLink").click(() => {

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