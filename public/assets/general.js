function calculateRisk(X, Y) {
  var riskAnalys = Number((1 / (1 + Math.exp(-1 * (-8.57219 + X))) * 100000000).toFixed(Y));
  return riskAnalys;
}