

let button = document.querySelectorAll('.dado');

button.forEach(function (userItem) {
    userItem.addEventListener("click", modifyText, false);
});

function modifyText(el) {
    el = el.target;
    let Random = Math.floor(Math.random() * 6 + 1);
    el.innerHTML = Random;

    let move = Random * 50;
    el.style.transform = 'rotate(360deg) translateY(' + move + 'px)';
    el.style.transition = 'transform 0.3s';

    setTimeout(function () {
        el.style.transform = '';
        el.style.transition = '';
    }, 100);
}
