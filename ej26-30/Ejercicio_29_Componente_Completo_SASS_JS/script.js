// Lógica de Tabs
// 1. Selecciona botones y paneles
// 2. Al hacer click en un botón:
//    - Quita active de todos
//    - Pon active al clickeado
//    - Muestra el panel correspondiente (id en data-attribute)

const botones = document.querySelectorAll('.tab-btn');
const paneles = document.querySelectorAll('.tab-pane');


botones.forEach(boton => {
  boton.addEventListener('click', (e) => {
 
    botones.forEach(b => b.classList.remove('active'));
    paneles.forEach(p => p.classList.remove('active'));

    const botonClickeado = e.target; 
    botonClickeado.classList.add('active');

    const targetId = botonClickeado.dataset.target;
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
  });
});
