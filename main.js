/*var wordToDisplay = "Ashleigh";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(wordToDisplay, letterColors);

bubbleShape = 'circle';

bounceBubbles();*/

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();
