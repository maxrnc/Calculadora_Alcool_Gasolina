function calcular() {
    let alcool = Number(document.getElementById("prcAlcool").value);
    let gasolina = Number(document.getElementById("prcGasolina").value);

    let valor = alcool / gasolina;
    let resultado = document.getElementById("resultado");

    if (valor > 0.7) {
        resultado.innerHTML = "Melhor usar Gasolina!!!";
    }
    else {
        resultado.innerHTML = "Melhor usar Alcool!!!";
    }
}