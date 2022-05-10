// Animation et fonctionnalites
let btnhover = document.getElementsByClassName('btnhover');
for (let i = 0; i < btnhover.length; i++) {
    btnhover[i].addEventListener('mouseover', () => {
        btnhover[i].style.background = '#b11313';
        btnhover[i].style.color = 'white';
        btnhover[i].style.fontWeight = 'bold';
        btnhover[i].style.boxShadow = '5px 5px 50px #ffffff';
    });
    btnhover[i].addEventListener('mouseout', () => {
        btnhover[i].style.background = 'white';
        btnhover[i].style.color = '#b11313';
        btnhover[i].style.boxShadow = 'none';
    });
};
let btnhover0 = document.getElementsByClassName('btnhover1');
for (let i = 0; i < btnhover0.length; i++) {
    btnhover0[i].addEventListener('mouseover', () => {
        btnhover0[i].style.background = 'white';
        btnhover0[i].style.color = '#b11313';
        btnhover[i].style.fontWeight = 'bold';
        btnhover0[i].style.boxShadow = '5px 5px 50px #ffffff';
    });
    btnhover0[i].addEventListener('mouseout', () => {
        btnhover0[i].style.background = 'transparent';
        btnhover0[i].style.color = 'white';
        btnhover0[i].style.boxShadow = 'none';
    });
};

//footer animation

let footericones = document.getElementsByClassName('footer-icones');
for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = 'white';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'black';
    });
};


//surligné lorsque la souris survole l'élément

let menu = document.querySelectorAll('li');
menu.forEach(function(li) {
    li.addEventListener('mouseover', () => {
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseout', () => {
        li.style.textDecoration = 'none';
    });
});

//doivent apparaître avec un fade in en démarrant de la gauche
$(document).ready(function() {
    $('.box').animate({
            left: "30px"
        },
        "slow");
    $(".description").fadeIn(5000);
});