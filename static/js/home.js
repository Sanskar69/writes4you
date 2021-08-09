$(document).ready(function(){

    $('.about-ani').waypoint(function(direction) {
        $('.about-ani').addClass('animate__animated animate__zoomIn')
    }, {
        offset: '50%'
    });

    $('.about-ani2').waypoint(function(direction) {
        $('.about-ani2').addClass('animate__animated animate__backInDown')
    }, {
        offset: '50%'
    });

    $('.about-ani3').waypoint(function(direction) {
        $('.about-ani3').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '50%'
    });

    $('.about-ani4').waypoint(function(direction) {
        $('.about-ani4').addClass('animate__animated animate__fadeInRight')
    }, {
        offset: '50%'
    });

    $('.about-ani5').waypoint(function(direction) {
        $('.about-ani5').addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: '50%'
    });

    $('.about-ani6').waypoint(function(direction) {
        $('.about-ani6').addClass('animate__animated animate__lightSpeedInLeft')
    }, {
        offset: '50%'
    });

    $('.about-ani7').waypoint(function(direction) {
        $('.about-ani7').addClass('animate__animated animate__lightSpeedInRight')
    }, {
        offset: '50%'
    })


});