//mouvement de gauche vers droit
$(document).ready(function() {
    $('#marveltext').fadeIn();
    $('#marveltext').animate({
        left: "400px",
    }, "slow")
});

//scroll image
$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        $('#marvelimage').css('top', scroll - 'px');
    });
});

//modal

var modal = document.getElementById('modal');
var myModal = document.getElementById('myModal');
myModal.onclick = function() {
    myModal.style.display = "block";
};