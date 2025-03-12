/* document.querySelector('.scroll-button').addEventListener('click', function() {
    document.querySelector('#general').scrollBy({
        left: 300,  // Desplazamiento a la derecha
        behavior: 'smooth'
    });
});
*/

let buttonLeft = document.querySelector ('.scroll-button-left');
let buttonRight = document.querySelector('.scroll-button-right');
let containerImages = document.querySelector('#general');

buttonLeft.addEventListener('click', function(e) {
    containerImages.scrollBy({
        left: -300,  /* Desplazamiento a la izquierda */
        behavior: 'smooth'
    });
});

buttonRight.addEventListener('click', function(e) {
    containerImages.scrollBy({
        left: 300,  /* Desplazamiento a la derecha */
        behavior: 'smooth'
    });
});

