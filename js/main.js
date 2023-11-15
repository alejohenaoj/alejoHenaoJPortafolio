const contenedorNavBarListaElement = document.getElementById('contenedorNavBarLista');
const toggleNavBarElement = document.getElementById('toggleNavBar');

toggleNavBarElement.addEventListener('click', () => {
  contenedorNavBarListaElement.classList.toggle('showContenedorNavBar');
});