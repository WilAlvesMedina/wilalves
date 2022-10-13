const btn = document.querySelector(".btnMenu");
const ul = document.querySelector(".menu");

btn.addEventListener("click", controlaMenu);

function controlaMenu(){
    ul.classList.toggle("show");
}



(function () {
    var menu = document.getElementById('menu');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();