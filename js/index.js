const beersCard = document.querySelectorAll('.beers_card');
const windowWidth = document.documentElement.clientWidth;
let position = 0;

document.querySelector('.left_arrow').addEventListener('click', scrollLeft);
document.querySelector('.right_arrow').addEventListener('click', scrollRight);

function scrollRight() {
    position -= windowWidth;
    for (let i = 0; i < beersCard.length; i++) {
        console.log(position);
        beersCard[i].style.transform = `translate(${position}px, 0)`;

    }
}

function scrollLeft() {
    position += windowWidth;
    for (let i = 0; i < beersCard.length; i++) {
        console.log(position);
        beersCard[i].style.transform = `translate(${position}px, 0)`;
    }
}