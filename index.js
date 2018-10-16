let ready = false;

const pageReady = () => {
    $(".loader").fadeOut(null, () => {
        $(".Cover").fadeOut();
        ready = true;
        let width = window.innerWidth;
        $(document.body).animate({
            scrollTop: width / 15
        }, 1300);
    });
}

const collapseSelection = (element) => {
    const sectionHeight = element.scrollHeight;

    let elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(() => {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        requestAnimationFrame(() => {
            element.style.height = 0 + 'px';
        });
    });

    element.setAttribute('data-collapsed', true);
}

const expandSelection = (element) => {
    const sectionHeight = element.scrollHeight;

    element.style.height = sectionHeight + 'px';
    element.addEventListener('transitionend', (e) => {
        element.removeEventListener('transitioned', arguments.callee);
    });

    element.setAttribute('data-collapsed', 'false');
}

$(document).ready(() => {
    $("html, body").animate({ scrollTop: 0 });

    let activeSectionId = 'About';

    $(".HomeLink").click(() => {
        let width = window.innerWidth;
        $(document.body).animate({
            scrollTop: width / 15
        });
    });

    $(window).scroll(() => {
        const navbarTarget = $(".hero-image").position().top + $(".hero-image").outerHeight(true) - 150;
        const skillsTarget = $("#skills").offset().top;

        let windowBottom = 0;
        if (ready) {
            windowBottom = $(window).scrollTop() + window.innerHeight;
        }

        console.log(windowBottom);
        console.log(skillsTarget);

        
        if ($(window).scrollTop() > navbarTarget) {
            $(".Navbar").addClass('show');
        } else {
            $(".Navbar").removeClass('show');
        }
        if (windowBottom > skillsTarget) {
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('percent')
                },1500);
            });
        }
    });

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
        $("#MusicianContent").toggle('fade');
    });
    $("#CookLabel").click(() => {
        $("#CookContent").toggle('fade');
    });
    $("#PilotLabel").click(() => {
        $("#PilotContent").toggle('fade');
    });

    $("#PedalLabel").click(() => {
        $("#PedalContent").slideToggle();
        $("#PedalPic").toggle('fade');
    });
    $("#RateLabel").click(() => {
        $("#RateContent").slideToggle();
    });
    $("#BurgerLabel").click(() => {
        $("#BurgerContent").slideToggle();
    });
    $("#FractalLabel").click(() => {
        $("#FractalContent").slideToggle();
        $("#FractalPic").toggle('fade');
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