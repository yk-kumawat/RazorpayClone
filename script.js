// Main Hero Section Image Slider
const slides = document.querySelectorAll(`.slides`);
let slideInterval = setInterval(next, 4000);

let count = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})
function slider(){
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;
            resetAutoSlide();
        }
    )
}
function prev() {
    if (count == 0) {
        
    } else {
        count--;
        slider();
    }
}
function next() {
    if (count < slides.length - 1) {
        count++;
    } else {
        count = 0;
    }
    slider();
}
function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(next, 4000);
}



// Mini Hero Section Logo Slider
let copy = document.querySelector(`.logos`).cloneNode(true);
document.querySelector(`.logo-container`).appendChild(copy);



//Middle Navbar
document.addEventListener('scroll', () => {
    const stickyDiv = document.querySelector('.midNav');
    const toptrigger = document.querySelector('.top-trigger');
    const offset = toptrigger.getBoundingClientRect().top;
    
    if (offset <= 0) {
        stickyDiv.classList.remove('opacity-0');
        stickyDiv.classList.add('opacity-1');
    } else {
        stickyDiv.classList.remove('opacity-1');
        stickyDiv.classList.add('opacity-0');
    }
});






const slide15 = document.querySelectorAll(`.slide15`);
let count15 = 0;
function slider15(){
    slide15.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count15 * 100}%)`;
        }
    )
}
const card1 = document.getElementById(`card1`);
const card2 = document.getElementById(`card2`);
const card3 = document.getElementById(`card3`);
const card4 = document.getElementById(`card4`);
const card5 = document.getElementById(`card5`);
const card6 = document.getElementById(`card6`);
const card7 = document.getElementById(`card7`);
function smcard1() {
    count15 = 0;
    card1.classList.add(`text-textBlack`);
    card1.classList.add(`border-b-[3px]`);
    card1.classList.add(`text-navGray`);
    card2.classList.remove(`text-textBlack`);
    card3.classList.remove(`text-textBlack`);
    card4.classList.remove(`text-textBlack`);
    card5.classList.remove(`text-textBlack`);
    card6.classList.remove(`text-textBlack`);
    card7.classList.remove(`text-textBlack`);
    card2.classList.remove(`border-b-[3px]`);
    card3.classList.remove(`border-b-[3px]`);
    card4.classList.remove(`border-b-[3px]`);
    card5.classList.remove(`border-b-[3px]`);
    card6.classList.remove(`border-b-[3px]`);
    card7.classList.remove(`border-b-[3px]`);
    slider15();
}
function smcard2() {
    count15 = 1;
    card2.classList.add(`text-textBlack`);
    card2.classList.add(`border-b-[3px]`);
    card1.classList.add(`text-navGray`);
    card1.classList.remove(`text-textBlack`);
    card3.classList.remove(`text-textBlack`);
    card4.classList.remove(`text-textBlack`);
    card5.classList.remove(`text-textBlack`);
    card6.classList.remove(`text-textBlack`);
    card7.classList.remove(`text-textBlack`);
    card1.classList.remove(`border-b-[3px]`);
    card3.classList.remove(`border-b-[3px]`);
    card4.classList.remove(`border-b-[3px]`);
    card5.classList.remove(`border-b-[3px]`);
    card6.classList.remove(`border-b-[3px]`);
    card7.classList.remove(`border-b-[3px]`);
    slider15();
}
function smcard3() {
    count15 = 2;
    card3.classList.add(`text-textBlack`);
    card3.classList.add(`border-b-[3px]`);
    card1.classList.add(`text-navGray`);
    card2.classList.remove(`text-textBlack`);
    card1.classList.remove(`text-textBlack`);
    card4.classList.remove(`text-textBlack`);
    card5.classList.remove(`text-textBlack`);
    card6.classList.remove(`text-textBlack`);
    card7.classList.remove(`text-textBlack`);
    card2.classList.remove(`border-b-[3px]`);
    card1.classList.remove(`border-b-[3px]`);
    card4.classList.remove(`border-b-[3px]`);
    card5.classList.remove(`border-b-[3px]`);
    card6.classList.remove(`border-b-[3px]`);
    card7.classList.remove(`border-b-[3px]`);
    slider15();
}
function smcard4() {
    count15 = 3;
    card4.classList.add(`text-textBlack`);
    card4.classList.add(`border-b-[3px]`);
    card1.classList.add(`text-navGray`);
    card2.classList.remove(`text-textBlack`);
    card3.classList.remove(`text-textBlack`);
    card1.classList.remove(`text-textBlack`);
    card5.classList.remove(`text-textBlack`);
    card6.classList.remove(`text-textBlack`);
    card7.classList.remove(`text-textBlack`);
    card2.classList.remove(`border-b-[3px]`);
    card3.classList.remove(`border-b-[3px]`);
    card1.classList.remove(`border-b-[3px]`);
    card5.classList.remove(`border-b-[3px]`);
    card6.classList.remove(`border-b-[3px]`);
    card7.classList.remove(`border-b-[3px]`);
    slider15();
}
function smcard5() {
    count15 = 4;
    card5.classList.add(`text-textBlack`);
    card5.classList.add(`border-b-[3px]`);
    card1.classList.add(`text-navGray`);
    card2.classList.remove(`text-textBlack`);
    card3.classList.remove(`text-textBlack`);
    card4.classList.remove(`text-textBlack`);
    card1.classList.remove(`text-textBlack`);
    card6.classList.remove(`text-textBlack`);
    card7.classList.remove(`text-textBlack`);
    card2.classList.remove(`border-b-[3px]`);
    card3.classList.remove(`border-b-[3px]`);
    card4.classList.remove(`border-b-[3px]`);
    card1.classList.remove(`border-b-[3px]`);
    card6.classList.remove(`border-b-[3px]`);
    card7.classList.remove(`border-b-[3px]`);
    slider15();
}
function smcard6() {
    count15 = 5;
    card6.classList.add(`text-textBlack`);
    card6.classList.add(`border-b-[3px]`);
    card1.classList.add(`text-navGray`);
    card2.classList.remove(`text-textBlack`);
    card3.classList.remove(`text-textBlack`);
    card4.classList.remove(`text-textBlack`);
    card5.classList.remove(`text-textBlack`);
    card1.classList.remove(`text-textBlack`);
    card7.classList.remove(`text-textBlack`);
    card2.classList.remove(`border-b-[3px]`);
    card3.classList.remove(`border-b-[3px]`);
    card4.classList.remove(`border-b-[3px]`);
    card5.classList.remove(`border-b-[3px]`);
    card1.classList.remove(`border-b-[3px]`);
    card7.classList.remove(`border-b-[3px]`);
    slider15();
}
function smcard7() {
    count15 = 6;
    card7.classList.add(`text-textBlack`);
    card7.classList.add(`border-b-[3px]`);
    card1.classList.add(`text-navGray`);
    card2.classList.remove(`text-textBlack`);
    card3.classList.remove(`text-textBlack`);
    card4.classList.remove(`text-textBlack`);
    card5.classList.remove(`text-textBlack`);
    card6.classList.remove(`text-textBlack`);
    card1.classList.remove(`text-textBlack`);
    card2.classList.remove(`border-b-[3px]`);
    card3.classList.remove(`border-b-[3px]`);
    card4.classList.remove(`border-b-[3px]`);
    card5.classList.remove(`border-b-[3px]`);
    card6.classList.remove(`border-b-[3px]`);
    card1.classList.remove(`border-b-[3px]`);
    slider15();
}










const navLinkS = document.querySelectorAll('.navlinkS');
const cardS = document.querySelectorAll('.cardS');

// Highlight active navbar link and card on scroll
window.addEventListener('scroll', () => {
    cardS.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= window.innerHeight / 4) {
            // Remove active class from all cards and navbar links
            navLinkS.forEach(link => link.classList.remove('border-b-[3px]'));
            navLinkS.forEach(link => link.classList.remove('text-textBlack'));

            // Add active class to the current card and navbar link
            navLinkS[index].classList.add('border-b-[3px]');
            navLinkS[index].classList.add('text-textBlack');

        }
    });
});

// Scroll to the correct card when a navbar link is clicked
navLinkS.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        // Scroll to the target card
        cardS[index].scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Update the active state manually
        navLinkS.forEach(l => l.classList.remove('border-b-[3px]'));
        link.classList.add('border-b-[3px]');
    });
});















// Powering Section Nav Clicks
const slide2 = document.querySelectorAll(`.slide2`);
let count2 = 0;
function slider2(){
    slide2.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count2 * 100}%)`;
        }
    )
}
const ecomv = document.getElementById(`ecom`);
const eduv = document.getElementById(`edu`);
const bfsiv = document.getElementById(`bfsi`);
const saasv = document.getElementById(`saas`);
const freelancerv = document.getElementById(`freelancer`);
function ecom(){
    count2 = 0;
    ecomv.classList.add(`text-textBlack`);
    ecomv.classList.add(`border-b-[3px]`);
    eduv.classList.remove(`text-textBlack`);
    bfsiv.classList.remove(`text-textBlack`);
    saasv.classList.remove(`text-textBlack`);
    freelancerv.classList.remove(`text-textBlack`);
    eduv.classList.remove(`border-b-[3px]`);
    bfsiv.classList.remove(`border-b-[3px]`);
    saasv.classList.remove(`border-b-[3px]`);
    freelancerv.classList.remove(`border-b-[3px]`);
    slider2();
}
function edu(){
    count2 = 1;
    eduv.classList.add(`text-textBlack`);
    eduv.classList.add(`border-b-[3px]`);
    ecomv.classList.add(`text-navGray`);
    ecomv.classList.remove(`text-textBlack`);
    bfsiv.classList.remove(`text-textBlack`);
    saasv.classList.remove(`text-textBlack`);
    freelancerv.classList.remove(`text-textBlack`);
    ecomv.classList.remove(`border-b-[3px]`);
    bfsiv.classList.remove(`border-b-[3px]`);
    saasv.classList.remove(`border-b-[3px]`);
    freelancerv.classList.remove(`border-b-[3px]`);
    slider2();
}
function bfsi(){
    count2 = 2;
    bfsiv.classList.add(`text-textBlack`);
    bfsiv.classList.add(`border-b-[3px]`);
    ecomv.classList.add(`text-navGray`);
    ecomv.classList.remove(`text-textBlack`);
    eduv.classList.remove(`text-textBlack`);
    saasv.classList.remove(`text-textBlack`);
    freelancerv.classList.remove(`text-textBlack`);
    ecomv.classList.remove(`border-b-[3px]`);
    eduv.classList.remove(`border-b-[3px]`);
    saasv.classList.remove(`border-b-[3px]`);
    freelancerv.classList.remove(`border-b-[3px]`);
    slider2();
}
function saas(){
    count2 = 3;
    saasv.classList.add(`text-textBlack`);
    saasv.classList.add(`border-b-[3px]`);
    ecomv.classList.add(`text-navGray`);
    ecomv.classList.remove(`text-textBlack`);
    bfsiv.classList.remove(`text-textBlack`);
    eduv.classList.remove(`text-textBlack`);
    freelancerv.classList.remove(`text-textBlack`);
    ecomv.classList.remove(`border-b-[3px]`);
    bfsiv.classList.remove(`border-b-[3px]`);
    eduv.classList.remove(`border-b-[3px]`);
    freelancerv.classList.remove(`border-b-[3px]`);
    slider2();
}
function freelancer(){
    count2 = 4;
    freelancerv.classList.add(`text-textBlack`);
    freelancerv.classList.add(`border-b-[3px]`);
    ecomv.classList.add(`text-navGray`);
    ecomv.classList.remove(`text-textBlack`);
    bfsiv.classList.remove(`text-textBlack`);
    saasv.classList.remove(`text-textBlack`);
    eduv.classList.remove(`text-textBlack`);
    ecomv.classList.remove(`border-b-[3px]`);
    bfsiv.classList.remove(`border-b-[3px]`);
    saasv.classList.remove(`border-b-[3px]`);
    eduv.classList.remove(`border-b-[3px]`);
    slider2();
}






const slides3 = document.querySelectorAll(`.slides3`);
const prevbtn3 = document.getElementById(`prev3`);
const nextbtn3 = document.getElementById(`next3`);

let count3 = 0;
slides3.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})
function slider3(){
    slides3.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count3 * 100}%)`;
        }
    )
}
function prev3() {
    if (count3 == 0) {
        prevbtn3.style.opacity = `0`;
    } else {
        count3--;
        nextbtn3.style.opacity = `1`;
        nextbtn3.disabled = false;
        slider3();
    }
    if(count3 == 0) {
        prevbtn3.disabled = true;
        prevbtn3.style.opacity = `0`;
    }
}
function next3() {
    if (count3 < slides3.length - 1) {
        count3++;
        prevbtn3.style.opacity = `1`;
        prevbtn3.disabled = false;
    } else {
        prevbtn3.style.opacity = `0`;
    }
    if(count3 == 2) {
        nextbtn3.disabled = true;
        nextbtn3.style.opacity = `0`;
    }
    slider3();
}









let copy2 = document.querySelector(`.Codelogos`).cloneNode(true);
document.querySelector(`.Codelogo-container`).appendChild(copy2);












const slides4 = document.querySelectorAll(`.slides4`);
const prevbtn4 = document.getElementById(`prev4`);
const nextbtn4 = document.getElementById(`next4`);

let count4 = 0;
function slider4(){
    slides4.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count4 * 100}%)`;
        }
    )
}
function prev4() {
    if (count4 == 0) {
        prevbtn4.style.opacity = `0`;
    } else {
        count4--;
        nextbtn4.style.opacity = `1`;
        nextbtn4.disabled = false;
        slider4();
    }
    if(count4 == 0) {
        prevbtn4.disabled = true;
        prevbtn4.style.opacity = `0`;
    }
}
function next4() {
    if (count4 < 6) {
        count4++;
        prevbtn4.style.opacity = `1`;
        prevbtn4.disabled = false;
    } else {
        prevbtn4.style.opacity = `0`;
    }
    if(count4 >= 5) {
        nextbtn4.disabled = true;
        nextbtn4.style.opacity = `0`;
    }
    slider4();
}








let copy3 = document.querySelector(`.founders`).cloneNode(true);
document.querySelector(`.founders-container`).appendChild(copy3);








