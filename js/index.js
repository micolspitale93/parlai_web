inizializeSDK();
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    FB.CustomerChat.show(true);
    console.log("customer chat!!")

});

$("#qea_menu").on("click", function () {
    $(".menu-nav").removeClass("active");
    $("#qea_menu").addClass("active");
    $(".menu-div").fadeOut();
    $("#qea").fadeIn();
    document.getElementById("chitchat").style.display = "none";
    document.getElementById("qea").style.display = "block";
});

$("#chitchat_menu").on("click", function () {
    $(".menu-nav").removeClass("active");
    $("#chitchat_menu").addClass("active");
    $(".menu-div").fadeOut();
    $("#chichat").fadeIn();
    document.getElementById("qea").style.display = "none";
    document.getElementById("chitchat").style.display = "block";
});

function inizializeSDK() {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '322301978494112',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.2'
        });
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

}
