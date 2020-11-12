// on ajoute un listener qui lance la fonction au chargemenrt de la page
document.addEventListener('DOMContentLoaded', scrollTop);

// on crée un fonction qui fait apparaitre le bouton quand on a scollé sur la page et qui permet de remonter en haut de la page
// le bouton s'affiche si on a scrollé, sinon il reste invisible
function scrollTop() {
    window.onscroll = function () {
        document.querySelector('#returnBtn').className = (window.pageYOffset > 100) ? 'btnVisible' : 'btnInvisible';
    }
}