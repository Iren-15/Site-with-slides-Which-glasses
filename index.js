const items = document.querySelectorAll('.item');

items.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        noSelect();
        item.classList.add('first');
    })
})

function noSelect() {
    items.forEach(function(item) {
        item.classList.remove('first');
    })
}

const images = ["1.avif", "2.avif", "3.avif", "4.avif", "5.avif", "6.avif"];
const image = document.querySelector(".image")
const btnNext = document.querySelector('.btnNext')
const btnBack = document.querySelector('.btnBack')

i=0;
btnNext.addEventListener('click', function() {
    i++
    if (i > images.length-1) {
        i=0
    }
    images.forEach(function(item) {
        image.src = images[i];
        console.log(images[i]);
    })
})

btnBack.addEventListener('click', function() {
    i--
    if (i < 0) {
        i = images.length-1
    }
    images.forEach(function(item) {
        image.src = images[i];
        console.log(images[i]);
    })
})