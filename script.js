// script.js
document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const heightLabel = heightInput.previousElementSibling;
    const weightLabel = weightInput.previousElementSibling;

    let valid = true;

    // Verifica a altura
    if (height > 0 && height <= 2.72) {
        document.getElementById('heightError').style.display = 'none';
        heightInput.classList.remove('error');
        heightLabel.classList.remove('error');
    } else {
        document.getElementById('heightError').style.display = 'block';
        heightInput.classList.add('error');
        heightLabel.classList.add('error');
        valid = false;
    }

    // Verifica o peso
    if (weight > 0 && weight <= 635) {
        document.getElementById('weightError').style.display = 'none';
        weightInput.classList.remove('error');
        weightLabel.classList.remove('error');
    } else {
        document.getElementById('weightError').style.display = 'block';
        weightInput.classList.add('error');
        weightLabel.classList.add('error');
        valid = false;
    }

    // Se os dados forem válidos, realiza o cálculo do IMC
    if (valid) {
        const imc = (weight / (height * height)).toFixed(2);
        let status = '';

        if (imc < 18.5) {
            status = 'abaixo do peso';
        } else if (imc < 24.9) {
            status = 'com peso normal';
        } else if (imc < 29.9) {
            status = 'com sobrepeso';
        } else {
            status = 'obeso';
        }

        document.getElementById('result').textContent = `${name}, seu IMC é ${imc} e você está ${status}.`;
    } else {
        document.getElementById('result').textContent = '';
    }
});
