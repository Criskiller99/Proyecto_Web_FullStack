// Obtiene el contenedor del carrusel
var carouselContainer = document.querySelector('.carousel-container-1');
// Obtiene el carrusel
var carousel = document.querySelector('.carousel-1');
// Obtiene los elementos del carrusel
var carouselItems = document.querySelectorAll('.carousel-item-1');
// Inicializa el índice del carrusel
var currentIndex = 0;

// Función para mostrar el siguiente elemento del carrusel
function showNext() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Establece el intervalo para cambiar automáticamente los elementos del carrusel
setInterval(showNext, 3000); // Cambia cada 3 segundos (ajusta el valor según tus necesidades)