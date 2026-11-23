// Calculates simple interest: (principal * rate * time) / 100
const calculateSimpleInterest = (p, r, t) => {
  return (p * r * t) / 100;
};

// Total amount = principal + interest
const calculateTotalAmount = (p, r, t) => {
  return p + calculateSimpleInterest(p, r, t);
};

const calculate = () => {
  // Read the inputs and convert them to numbers before using them
  let p = parseFloat(document.getElementById("principal").value);
  let r = parseFloat(document.getElementById("rate").value);
  let t = parseFloat(document.getElementById("time").value);

  let result = document.getElementById("result");

  // Guard against empty or invalid input to prevent TypeErrors
  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    result.innerHTML = `<div>Please enter valid numbers for all fields.</div>`;
    return;
  }

  let simpleInterest = calculateSimpleInterest(p, r, t);
  let amount = calculateTotalAmount(p, r, t);

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

// Export the business logic so Jasmine can test it in Node
if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateSimpleInterest, calculateTotalAmount };
}
