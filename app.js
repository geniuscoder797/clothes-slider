let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carousolDom = document.querySelector('.carousol');
let listItem = document.querySelector('.carousol .list');
let thumbnailDom = document.querySelector('.carousol .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
};
prevDom.onclick = function(){
    showSlider('prev');
};
function showSlider (type){
    let itemSlider = document.querySelectorAll('.carousol .list .item');
    let thumbnailSlider = document.querySelectorAll('.carousol .thumbnail .thu-item');
    if (type === 'next'){
        listItem.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(thumbnailSlider[0]);
        carousolDom.classList.add('next');
    }else {
        let anotherItem = itemSlider.length-1
        listItem.prepend(itemSlider[anotherItem]);
        thumbnailDom.prepend(thumbnailSlider[anotherItem]);
        carousolDom.classList.add('prev');

    }
}