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
