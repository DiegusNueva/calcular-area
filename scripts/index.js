document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);

        if (!isNaN(length) && !isNaN(width)) {
            const area = length * width;
            resultContainer.innerHTML = `El área del rectángulo es: ${area}`;
        } else {
            resultContainer.innerHTML = "Por favor, ingrese valores válidos.";
        }
    });
});
