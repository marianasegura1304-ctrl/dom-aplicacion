// Selección de elementos del DOM
const btnClick = document.getElementById('btnClick');
const spanContador = document.getElementById('contador');
const tbodyRegistros = document.getElementById('tablaRegistros');

// Variable de estado numérica para los clics
let contadorClicks = 0;

// Configurar el escuchador de eventos (Event Listener)
btnClick.addEventListener('click', () => {
    // Incrementar contador
    contadorClicks++;
    spanContador.textContent = contadorClicks;

    // Obtener la hora exacta actual formateada (HH:MM:SS)
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    // Crear dinámicamente elementos de tipo fila (<tr>) y celdas (<td>)
    const nuevaFila = document.createElement('tr');
    
    const celdaClicks = document.createElement('td');
    celdaClicks.textContent = contadorClicks;
    
    const celdaHora = document.createElement('td');
    celdaHora.textContent = horaFormateada;

    // Rellenar la fila con las celdas
    nuevaFila.appendChild(celdaClicks);
    nuevaFila.appendChild(celdaHora);

    // Agregar la nueva fila al inicio del cuerpo de la tabla (para que los más recientes salgan arriba)
    tbodyRegistros.insertBefore(nuevaFila, tbodyRegistros.firstChild);
});