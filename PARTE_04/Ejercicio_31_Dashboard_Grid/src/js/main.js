const button = document.querySelector('#toggleSidebar');
const dashboard = document.querySelector('.dashboard');

button.addEventListener('click', () => {
  dashboard.classList.toggle('collapsed');
});