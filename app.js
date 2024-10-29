function convertirAFahrenheitACelsius(fahrenheit) {
    return new Promise((resolve, reject) => {
        if (isNaN(fahrenheit)) {
            reject("Por favor, ingrese un número válido.");
        } else {
            const celsius = (5 / 9) * (fahrenheit - 32);
            resolve(celsius.toFixed(2)); // Limita el resultado a dos decimales
        }
    });
}

// Función async para manejar la conversión
async function convertirTemperatura() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    const resultadoElemento = document.getElementById("resultado");

    try {
        const celsius = await convertirAFahrenheitACelsius(fahrenheit);
        resultadoElemento.textContent = `${fahrenheit}° Fahrenheit son ${celsius}° Celsius.`;
    } catch (error) {
        resultadoElemento.textContent = `Error: ${error}`;
    }
}
