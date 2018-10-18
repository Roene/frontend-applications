function number(element) {

	var values = document.querySelectorAll('.choose option:checked');
	var totalWeight = element.options[element.selectedIndex].value;
	for (var i = 0; i < values.length; i++) {
		var weight = values[i].getAttribute('value');
		var number = parseFloat(weight);
		factorRisk(number);
	}
	calculateRisk(Number(totalWeight.replace(',', '.')));
	console.log(totalWeight);
}

function calculateRisk(X) {
  var riskNumber = Number((1 / (1 + Math.exp(-1 * (-8.57219 + X))) * 10000).toFixed(2));
  document.getElementById('risk_num').innerHTML = riskNumber + '%';
  return riskNumber;
}

function factorRisk() {

}