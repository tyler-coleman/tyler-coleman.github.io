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

$(document).ready(() => {
    $("html, body").animate({ scrollTop: 0 });

    $(".HomeLink").click(() => {
        const width = window.innerWidth;
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
            scrollTop: $("#About").offset().top + 20
        });
    });

    $(".ProjectsLink").click(() => {
        $(document.body).animate({
            scrollTop: $("#Projects").offset().top + 20
        });
    });

    $(".ContactLink").click(() => {
        $(document.body).animate({
            scrollTop: $("#Contact").offset().top + 20
        });
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