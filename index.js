const pageReady = () => {
    $(".loader").fadeOut(null, () => {
        $(".Cover").fadeOut();
        let width = window.innerWidth;
        $(document.body).animate({
            scrollTop: width / 15
        }, 1000);
        $(".Navbar").addClass('show');
    });
}

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
        $("#MusicianContent").slideToggle();
    });
    $("#CookLabel").click(() => {
        $("#CookContent").slideToggle();
    });
    $("#PilotLabel").click(() => {
        $("#PilotContent").slideToggle();
    });
    $("#PedalLabel").click(() => {
        $("#PedalContent").slideToggle();
    });
    $("#RateLabel").click(() => {
        $("#RateContent").slideToggle();
    });
    $("#BurgerLabel").click(() => {
        $("#BurgerContent").slideToggle();
    });
    $("#FractalLabel").click(() => {
        $("#FractalContent").slideToggle();
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