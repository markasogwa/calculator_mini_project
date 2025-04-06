const calculatorScreen = document.getElementById("calc-screen");
const buttons = document.querySelectorAll(".buttons button");

// Add event listener to all the button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.dataset.value;

    // Use switch to check section that is clicked
    switch (btnValue) {
      case "C":
        clearScreen();
        break;
      case "⬅":
        backspace();
        break;
      case "=":
        calculate();
        break;
      default:
        appendToScreen(btnValue);
    }
  });
});

// Add value to screen
function appendToScreen(value) {
  calculatorScreen.value += value;
}

// clear screen
function clearScreen() {
  calculatorScreen.value = "";
}

// delete digit
function backspace() {
  calculatorScreen.value = calculatorScreen.value.slice(0, -1);
}

// calculate
function calculate() {
  try {
    const result = math.evaluate(calculatorScreen.value);
    calculatorScreen.value = result;
  } catch (error) {
    calculatorScreen.value = "Error";
    setTimeout(clearScreen, 1000);
  }
}

// keyboard support
document.addEventListener("keydown", (e) => {
  if (/[0-9+\_*/.()^]/.test(e.key)) {
    appendToScreen(e.key);
  } else if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearScreen();
  }
});
