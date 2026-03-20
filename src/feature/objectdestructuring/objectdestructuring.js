// Objeto dado
const person = {
    name: 'NiggapollonFullstack',
    age: 666,
    city: 'Milan',
    profession: 'Desarrollador'
};

// Elementos del DOM
const tbody = document.querySelector('tbody');
const emptyState = document.getElementById('emptyState');

// Función que usa destructuring
function addData() {

    tbody.innerHTML = '';
    emptyState.classList.add('d-none');

    const { name, age, profession } = person;

    tbody.innerHTML = `
        <tr>
            <td>
                <strong>Nombre:</strong> ${name} <br>
                <strong>Edad:</strong> ${age} <br>
                <strong>Profesión:</strong> ${profession}
            </td>
        </tr>
    `;
}