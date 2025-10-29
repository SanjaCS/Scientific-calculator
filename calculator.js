let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

// Must be global so eval() can access it
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculate() {
  try {
    let expr = display.value;

    // Replace sin, cos, tan with degree-based Math functions
    expr = expr.replace(/sin\(([^)]+)\)/g, function (_, angle) {
      return "Math.sin(toRadians(" + angle + "))";
    });

    expr = expr.replace(/cos\(([^)]+)\)/g, function (_, angle) {
      return "Math.cos(toRadians(" + angle + "))";
    });

    expr = expr.replace(/tan\(([^)]+)\)/g, function (_, angle) {
      return "Math.tan(toRadians(" + angle + "))";
    });

    display.value = eval(expr);
  } catch (e) {
    display.value = "Error";
    console.error(e); // Show actual error in console
  }
}
