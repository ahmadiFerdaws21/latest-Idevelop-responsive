// for humberger icon start
$(document).ready(function(){
    $("#navbar-toggle").click(function(){
        $(".navbar-left1").toggleClass("active");
    });
});
// for humberger icon end


// BANNER JS Start
const textElement1 = document.getElementById('changing-text1');
const textElement2 = document.getElementById('changing-text2');
const textElement3 = document.getElementById('changing-text3');
const textElement4 = document.getElementById('changing-text4');
const textElement5 = document.getElementById('changing-text5');
const imageElement = document.getElementById('banner-image');
const buttonElement = document.getElementById('button-container');

// Array of texts and images
const text1 = ['#We PROVIDE Technology', '#IT Soulutions for Success'];
const text2 = ['Modern Technology', 'Excellent IT Services'];
const text3 = ['Improve business. ', 'for your success.'];
const text4 = ['Explore the forefront of technological advancement with tailored ', 'From infrastructure management to software solutions, '];
const text5 = ['solutions designed to meet your unique needs.', 'our comprehensive IT services optimize operations and drive innovation.']
const images = ['Images/Image1.jpg', 'Images/Image2.jpg'];
const buttons = ['button', 'button']

let text1Index = 0;
let text2Index = 0;
let text3Index = 0;
let text4Index = 0;
let text5Index = 0;

let imageIndex = 0;
let buttonIndex = 0;

// Function to change text with animation
function changeText1() {
  textElement1.style.opacity = 0;
  setTimeout(() => {
    textElement1.textContent = text1[text1Index];
    textElement1.style.opacity = 1;
    text1Index = (text1Index + 1) % text1.length;
  }, 1500); 
}

function changeText2() {
  textElement2.style.opacity = 0;
  setTimeout(() => {
    textElement2.textContent = text2[text2Index];
    textElement2.style.opacity = 1;
    text2Index = (text2Index + 1) % text2.length;
  }, 1500); 
}
function changeText3() {
  textElement3.style.opacity = 0;
  setTimeout(() => {
    textElement3.textContent = text3[text3Index];
    textElement3.style.opacity = 1;
    text3Index = (text3Index + 1) % text3.length;
  }, 1500); 
}
function changeText4() {
  textElement4.style.opacity = 0;
  setTimeout(() => {
    textElement4.textContent = text4[text4Index];
    textElement4.style.opacity = 1;
    text4Index = (text4Index + 1) % text4.length;
  }, 1500);
}
function changeText5() {
  textElement5.style.opacity = 0;
  setTimeout(() => {
    textElement5.textContent = text5[text5Index];
    textElement5.style.opacity = 1;
    text5Index = (text5Index + 1) % text5.length;
  }, 1500); 
}

// Function to change image
function changeImage() {
  imageElement.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

function hideButton() {
  buttonElement.src = buttons[buttonIndex];
  buttonIndex = (buttonIndex +1) % buttons.length;
}

// Initial calls to change text and image
changeText1();
changeText2();
changeText3();
changeText4();
changeText5();
changeImage();
hideButton();

// Automatically change text every 10 seconds
setInterval(changeText1, 10000);
setInterval(changeText2, 10000);
setInterval(changeText3, 10000);
setInterval(changeText4, 10000);
setInterval(changeText5, 10000);
setInterval(hideButton, 2000);

// Automatically change image every 10 seconds
setInterval(changeImage, 10000);
// BANNER JS End