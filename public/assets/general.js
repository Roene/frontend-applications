function number(element) {

    var values = document.querySelectorAll('.choose option:checked'); // Haal alle checked select velden op
    var totalWeight = element.options[element.selectedIndex].value;   // Haal value op van select element die wordt aangeklikt
    calculateRisk(Number(totalWeight.replace(',', '.')));             // Maak van de opgehaalde value een nummer
}

function calculateRisk(X) {
    var riskNumber = Number((1 / (1 + Math.exp(-1 * (-8.57219 + X))) * 10000).toFixed(2));
    document.getElementById('risk_num').innerHTML = riskNumber + '%';  // Zet rsultaat van de formule in de h2
    return riskNumber;
}