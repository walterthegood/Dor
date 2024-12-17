// Verificar si hay una preferencia almacenada en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const modeIcon = document.querySelector('.Logo1.mode-icon'); // Icono para cambiar el modo
  const body = document.body; // Cuerpo de la página
  const main = document.querySelector('main'); // Elemento <main>
  const mainAsideArticles = document.querySelectorAll('.MainAside main article'); // Artículos dentro de <main>
  const nombreGafas = document.querySelectorAll('.NombreGafas'); // Elementos con la clase NombreGafas
  const nombreRep = document.querySelectorAll('.NombreRep'); // Elementos con la clase NombreRep
  const nombrePrecio = document.querySelectorAll('.NombrePrecio'); // Elementos con la clase NombrePrecio
  const tituloGafas = document.querySelectorAll('.TituloGafas'); // Elementos con la clase TituloGafas
  const financing = document.querySelectorAll('.financing'); // Elementos con la clase financing
  const deliveryInfo = document.querySelectorAll('.delivery-info p'); // Elementos dentro de delivery-info
  const descriptionProducto = document.querySelectorAll('.Desciption-producto p');
   // Elementos de Desciption-producto

  // Comprobar si hay un modo guardado en localStorage
  const savedMode = localStorage.getItem('mode');
  
  if (savedMode === 'dark') {
      // Si está en modo oscuro, aplica los estilos correspondientes
      body.style.setProperty('--bg-color-dark', '#1e1e1e');
      main.style.backgroundColor = 'var(--bg-color-dark)';
      mainAsideArticles.forEach(article => {
          article.style.backgroundColor = 'var(--shadow-color-dark)';
      });
      
      // Cambiar los colores del texto
      tituloGafas.forEach(el => el.style.color = '#ffffff');
      financing.forEach(el => el.style.color = '#ffffff');
      deliveryInfo.forEach(el => el.style.color = '#ffffff');
      descriptionProducto.forEach(el => el.style.color = '#ffffff');
      nombreGafas.forEach(el => el.style.color = 'var(--text-color-dark)');
      nombreRep.forEach(el => el.style.color = 'var(--text-color-dark)');
      nombrePrecio.forEach(el => el.style.color = 'var(--accent-color-dark)');

      modeIcon.classList.add('dark-mode');
  } else {
      // Si no hay preferencia, o está en modo claro, aplica el modo claro
      body.style.setProperty('--bg-color-dark', '');
      main.style.backgroundColor = '';
      mainAsideArticles.forEach(article => {
          article.style.backgroundColor = '';
      });
      
      // Restaurar los colores del texto a su estado por defecto
      tituloGafas.forEach(el => el.style.color = '');
      financing.forEach(el => el.style.color = '');
      deliveryInfo.forEach(el => el.style.color = '');
      descriptionProducto.forEach(el => el.style.color = '');
      nombreGafas.forEach(el => el.style.color = '');
      nombreRep.forEach(el => el.style.color = '');
      nombrePrecio.forEach(el => el.style.color = '');

      modeIcon.classList.remove('dark-mode');
  }

  // Al hacer clic en el icono, alternar el modo
  modeIcon.addEventListener('click', () => {
      const isDarkMode = body.style.getPropertyValue('--bg-color-dark') === '#1e1e1e';

      if (isDarkMode) {
          // Cambiar a modo claro
          body.style.setProperty('--bg-color-dark', '');
          main.style.backgroundColor = '';
          mainAsideArticles.forEach(article => {
              article.style.backgroundColor = '';
          });
  
          // Restaurar los colores del texto a su estado por defecto
          tituloGafas.forEach(el => el.style.color = '');
          financing.forEach(el => el.style.color = '');
          deliveryInfo.forEach(el => el.style.color = '');
          descriptionProducto.forEach(el => el.style.color = '');
          nombreGafas.forEach(el => el.style.color = '');
          nombreRep.forEach(el => el.style.color = '');
          nombrePrecio.forEach(el => el.style.color = '');
  
          modeIcon.classList.remove('dark-mode');
          localStorage.setItem('mode', 'light'); // Guardar el modo claro
      } else {
          // Cambiar a modo oscuro
          body.style.setProperty('--bg-color-dark', '#1e1e1e');
          main.style.backgroundColor = 'var(--bg-color-dark)';
          mainAsideArticles.forEach(article => {
              article.style.backgroundColor = 'var(--shadow-color-dark)';
          });
          
          // Cambiar los colores del texto
          tituloGafas.forEach(el => el.style.color = '#ffffff');
          financing.forEach(el => el.style.color = '#ffffff');
          deliveryInfo.forEach(el => el.style.color = '#ffffff');
          descriptionProducto.forEach(el => el.style.color = '#ffffff');
          nombreGafas.forEach(el => el.style.color = 'var(--text-color-dark)');
          nombreRep.forEach(el => el.style.color = 'var(--text-color-dark)');
          nombrePrecio.forEach(el => el.style.color = 'var(--accent-color-dark)');
  
          modeIcon.classList.add('dark-mode');
          localStorage.setItem('mode', 'dark'); // Guardar el modo oscuro
      }
  });
});
// Elementos principales


const aumentarBtn = document.getElementById('aumentar');
const disminuirBtn = document.getElementById('disminuir');
const body = document.body;

const root = document.documentElement;

// Configuración de tamaños
const tamanioInicial = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base')); // Tamaño inicial en rem
const escala = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-step')); // Incremento/decremento en rem (2px)

// Cargar el tamaño guardado en localStorage o usar el tamaño inicial por defecto
let tamanioActual = parseFloat(localStorage.getItem('fontSize')) || tamanioInicial;
body.style.fontSize = `${tamanioActual}rem`;


// Función para actualizar el tamaño de letra
function actualizarTamanio(nuevoTamanio) {
    tamanioActual = nuevoTamanio;
    body.style.fontSize = `${tamanioActual}rem`;

    // Guardar el tamaño en localStorage
    localStorage.setItem('fontSize', tamanioActual);
}

// Cargar el tamaño de fuente almacenado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const tamanioGuardado = parseFloat(localStorage.getItem('fontSize'));
    if (!isNaN(tamanioGuardado)) {
        actualizarTamanio(tamanioGuardado);
    }
});

// Eventos para los botones
aumentarBtn.addEventListener('click', () => {
    actualizarTamanio(tamanioActual + escala);
});

disminuirBtn.addEventListener('click', () => {
    actualizarTamanio(tamanioActual - escala);
});

// Botón para restablecer el tamaño de letra
const restablecerBtn = document.getElementById('restablecer');

if (restablecerBtn) {
    restablecerBtn.addEventListener('click', () => {
        // Restablecer el tamaño de letra al original
        tamanioActual = tamanioInicial; // Tamaño inicial definido previamente
        body.style.fontSize = `${tamanioActual}rem`;

        // Guardar el tamaño original en localStorage para mantener consistencia entre páginas
        localStorage.setItem('fontSize', tamanioInicial);
    });
}
