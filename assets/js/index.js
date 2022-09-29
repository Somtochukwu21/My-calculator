// GETS AN ELEMENT WITH ID DISPLAY
const display = document.querySelector("#display");

// THIS GETS ALL BUTTON ELEMENTS IN THE HTML
const button = document.querySelectorAll("button");

// LOOPS THROUGH THE BUTTONS WITH forEach() METHOD
button.forEach((item) => {
  // ADDS AN EVENT LISTENER TO THE BUTTON
  item.onclick = () => {
    // CHECKS IF THE ID IS CLEAR IF TRUE IT EMPTIES THE DISPLAY
    if (item.id == "clear") {
      display.innerText = "";
      return false;
    }

    // CHECKS IF THE ID IS BACKSPACE IF TRUE IT USES THE SUBSTR METHOD TO REMOVE VALUES FROM DISPLAY
    if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
      return false;
    }

    // CHECKS IF DISPLAY IS NOT EMPTY AND THE ID OF THE PRESSED BUTTON IS EQUAL IF TRUE IT EVALUATES THE DISPLAY VALUE
    if (display.innerText !== "" && item.id === "equal") {
      display.innerText = eval(display.innerText);
      return false;
    }

    // CHECKS IF DISPLAY IS EMPTY AND THE ID OF THE PRESSED BUTTON IS EQUAL IF TRUE IT SETS THE DISPLAY VALUE TO EMPTY
    if (display.innerText === "" && item.id === "equal") {
      display.innerText = "Empty!";
      setTimeout(() => {
        display.innerText = "";
      }, 2000); //THIS CLEARS THE VALUE OF THE DISPLAY WITHIN 2SECS
      return false;
    }

    // THIS DISPLAYS THE ID OF THE BUTTONS IN THE DISPLAY
    display.innerText += item.id;
  };
});

// GETS THE DIV WITH CLASS theme-toggler
const themeToggleBtn = document.querySelector(".theme-toggler");

// GETS THE DIV WITH CLASS calculator
const calculator = document.querySelector(".calculator");

// GETS THE i WITH CLASS toggler-icon
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;

// ADDS AN EVENT LISTENER TO themeToggleBtn
themeToggleBtn.onclick = () => {

  // THIS TOGGLES THE CLASS DARK FOR CALCULATOR
  calculator.classList.toggle("dark");

  // THIS TOGGLES THE CLASS ACTIVE FOR themeToggleBtn
  themeToggleBtn.classList.toggle("active");

  isDark = !isDark;
};
