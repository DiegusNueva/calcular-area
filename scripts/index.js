document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("result");

    calculateButton.addEventListener("click",  () => {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);

        /**
         * Si alguno de los dos valores introducidos por el usuario no es un número
         */
        if (!isNaN(length) && !isNaN(width)) {
            const area = length * width;
            resultContainer.innerHTML = `El área del rectángulo es: ${area}`;
        } else {
            resultContainer.innerHTML = "Por favor, ingrese valores válidos.";
        }
    });
});
