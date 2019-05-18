var ddd=setInterval(() => {
    $(".explore .section3 .concenter .f1 ul").animate({
        marginLeft: "-500px"
    }, 700, function () {
        $(".explore .section3 .concenter .f1 ul li").eq(0).appendTo($(".explore .section3 .concenter .f1 ul"));
        $(".explore .section3 .concenter .f1 ul").css('marginLeft', '0px');
    });
}, 3000);
