let close = document.getElementById("close");
let modal_bg = document.querySelector('.modal-bg');
let card = document.querySelector('.container');
let buy = document.querySelectorAll('buy');
card.addEventListener('click', function () {
    modal_bg.style.display = "block";
})

close.onclick = function () {
    modal_bg.style.display = "none";
}