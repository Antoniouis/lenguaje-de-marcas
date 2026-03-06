// Ejercicio 22: Eventos y Clases

// 1. Selecciona el botón del menú, el botón de cerrar y el menú lateral
const BotontoggleMenu =  document.getElementById('toggleMenu');
const menuLateral =  document.getElementById('menuLateral');
const closeMenu =  document.getElementById('closeMenu');

// 2. Define una función 'toggleMenu' que:
//    - Use classList.toggle('hidden') en el menú

function toggleMenu(){
    menuLateral.classList.toggle('hidden');
}

// 3. Agrega los Event Listeners a los botones para llamar a esa función
BotontoggleMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
