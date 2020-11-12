// on sélection chaque ancre dans le document et pour chaque ancre un ajoute un event listener qui appele la fonction smoothScoll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
});

// fonction smoothScoll
function smoothScroll(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}