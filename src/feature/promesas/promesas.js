// Elementos del DOM
const inputTexto = document.getElementById('name');
const tbody = document.querySelector('tbody');
const emptyState = document.getElementById('emptyState');

function verificarVocal(cadena) {
    return new Promise((resolve, reject) => {
        if (!cadena || typeof cadena !== 'string') {
            reject('Entrada inválida');
            return;
        }

        // Obtener último carácter
        const ultimoCaracter = cadena.trim().slice(-1).toLowerCase();

        const vocales = ['a', 'e', 'i', 'o', 'u'];

        if (vocales.includes(ultimoCaracter)) {
            resolve(ultimoCaracter);
        } else {
            reject('El carácter no termina en vocal');
        }
    });
}


function mostrarResultado(vocal) {
    tbody.innerHTML = `
        <tr>
            <td class="text-success fw-bold text-uppercase">
                ${vocal}
            </td>
        </tr>
    `;
    emptyState.classList.add('d-none');
}

// error
function mostrarError(mensaje) {
    tbody.innerHTML = '';
    emptyState.classList.remove('d-none');
    emptyState.innerHTML = `
        <p class="text-danger fw-bold mb-0">
            error ${mensaje}
        </p>
    `;
}

// Función del botón
function addData() {
    const texto = inputTexto.value.trim();

    tbody.innerHTML = '';
    emptyState.classList.add('d-none');

    verificarVocal(texto)
        .then(vocal => {
            mostrarResultado(vocal);
        })
        .catch(error => {
            mostrarError(error);
        });
}
