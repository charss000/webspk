const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .store');
const hiddenInput = document.querySelector('#inputSelect');
export function select_header() {
document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.store').innerText;
	});
});
select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
	});
}
