// Definir el usuario y contraseña que has escogido
const validUsername = 'hpclan';
const validPassword = 'hpclan123';

// Capturar el formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar el usuario y contraseña
    if (username === validUsername && password === validPassword) {
        document.getElementById('membersList').classList.remove('hidden'); // Mostrar la lista de miembros
        document.getElementById('search-container').classList.remove('hidden'); // Mostrar el sistema de búsqueda
        document.getElementById('loginForm').classList.add('hidden'); // Ocultar el formulario de login
    } else {
        document.getElementById('error').classList.remove('hidden'); // Mostrar mensaje de error
    }
});

// Funcionalidad de búsqueda
document.getElementById('searchButton').addEventListener('click', function() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('membersTable');
    const rows = table.getElementsByTagName('tr');
    let found = false;

    // Recorrer cada fila de la tabla (empezando desde la segunda, ya que la primera es el encabezado)
    for (let i = 1; i < rows.length; i++) {
        const nameCell = rows[i].getElementsByTagName('td')[0]; // Columna del nombre

        if (nameCell) {
            const name = nameCell.textContent.toLowerCase();

            if (name.includes(input)) {
                // Si coincide, desplazarse hacia el jugador
                rows[i].scrollIntoView({ behavior: 'smooth' });
                rows[i].style.backgroundColor = 'yellow'; // Resaltar el jugador encontrado
                found = true;
                break; // Salir del loop si ya lo encontró
            }
        }
    }

    if (!found) {
        alert('Player not found.');
    }
});
    
