let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider(); 
    })
})

function reloadSlider(){
    dots[active].classList.add('active');
    slider.style.left = -items[active].offsetLeft + 'px';
}
next.onclick = function(){
    active += 1;
    rightSlider();
}

function rightSlider(){
    dots[active].classList.add('active');
    slider.style.left = -items[active].offsetLeft + 'px';
    dots[active - 1].classList.remove('active');
}

prev.onclick = function(){
    active -= 1;
    leftSlider();
}

function leftSlider(){
    dots[active].classList.add('active');
    slider.style.left = -items[active].offsetLeft + 'px';
    dots[active + 1].classList.remove('active');
}
let refreshInterval = setInterval(()=> {next.click()}, 6000);