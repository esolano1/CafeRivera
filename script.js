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



const productos = [
   {texto: "Cafe de grano", link: "Productos-Contacto/productos.html"},
   {texto: "Cafe en pergamino", link: "Productos-Contacto/productos.html"},
   {texto: "Cafe molido", link: "Productos-Contacto/productos.html"} 
];
  

  const buscador = document.getElementById('searchInput');
const resultados = document.getElementById('results');

buscador.addEventListener('input', function() {
    const texto = buscador.value.toLowerCase();
  
    if (texto.length >= 3) {
      // Dividimos el texto en palabras
      const palabras = texto.split(/\s+/); // divide por espacios
  
      const filtrados = productos.filter(item => {
        const itemLower = item.texto.toLowerCase();
        // Devuelve true sólo si TODAS las palabras están presentes en el texto
        return palabras.every(palabra => itemLower.includes(palabra));
      });
  
      resultados.innerHTML = filtrados.length
    /*    ? filtrados.map(item => `<p>${item}</p>`).join('')  */
    ? filtrados.map(item => `<a href="${item.link}">${item.texto}</a>`).join('<br>')
        : '<p>No se encontraron resultados</p>';
    } else {
      resultados.innerHTML = '';
    }
  });