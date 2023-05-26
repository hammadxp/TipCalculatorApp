const tipForm = document.getElementById("tip-form");
const tipOptions = document.getElementById("tip-options");

const inputBill = document.getElementById("bill-input");
const inputTip = document.getElementById("tip-input");
const inputPeople = document.getElementById("people-input");

const tipTotalEl = document.getElementById("tip-total");
const tipPerPersonEl = document.getElementById("tip-per-person");

const btnCalculate = document.getElementById("btn-calculate");
const btnReset = document.getElementById("btn-reset");

// Tip option change handler

tipOptions.addEventListener("click", function (e) {
  e.preventDefault();

  const btn = e.target.closest(".tip-option");

  if (!btn) return;

  // Remove 'selected' style from all elements

  document.querySelectorAll(".tip-option").forEach((option) => {
    option.classList.remove("tip-selected", "tip-selected-styles");
  });

  // Add 'selected' style to clicked button

  btn.classList.add("tip-selected", "tip-selected-styles");
  inputTip.classList.remove("tip-selected-styles"); // Skip styling input element

  inputTip.value = inputTip.value ? inputTip.value : "";
});

// Custom tip placeholder handler

inputTip.addEventListener("focusin", function () {
  inputTip.placeholder = "";
});

inputTip.addEventListener("focusout", function () {
  inputTip.placeholder = "Custom";
});

// Input change handler (for 'Calculate' button visibility)

inputBill.addEventListener("input", checkInputs);
tipOptions.addEventListener("click", checkInputs);
inputTip.addEventListener("input", checkInputs);
inputPeople.addEventListener("input", checkInputs);

function checkInputs() {
  const selectedTip = tipOptions.querySelector(".tip-selected");

  if (inputBill.value && (selectedTip.textContent || selectedTip.value) && inputPeople.value) {
    btnCalculate.classList.remove("btn-calculate-disabled");
    btnCalculate.classList.add("btn-calculate");
  } else {
    btnCalculate.classList.remove("btn-calculate");
    btnCalculate.classList.add("btn-calculate-disabled");
  }
}

// Reset invalid indicators

inputBill.addEventListener("click", resetInvalidIndicator);
inputTip.addEventListener("click", resetInvalidIndicator);
inputPeople.addEventListener("click", resetInvalidIndicator);

function resetInvalidIndicator() {
  const invalidBill = document.querySelector(".invalid-bill");
  const invalidTip = document.querySelector(".invalid-tip");
  const invalidPeople = document.querySelector(".invalid-people");

  if (this.id === "bill-input") {
    inputBill.classList.remove("border-2", "border-red-500");
    invalidBill.classList.add("hidden");
  }
  if (this.id === "tip-input") {
    inputTip.classList.remove("border-2", "border-red-500");
    invalidTip.classList.add("hidden");
  }
  if (this.id === "people-input") {
    inputPeople.classList.remove("border-2", "border-red-500");
    invalidPeople.classList.add("hidden");
  }
}

// Submition handler

tipForm.addEventListener("submit", function (e) {
  const selectedTip = tipOptions.querySelector(".tip-selected");

  if (inputBill.value && (selectedTip.textContent || selectedTip.value) && inputPeople.value) {
    e.preventDefault();

    const bill = inputBill.value;
    const tip = selectedTip.textContent ? selectedTip.textContent.replace("%", "") : selectedTip.value;
    const people = inputPeople.value;

    console.log("Bill", bill, "-", "Tip", tip, "-", "People", people);

    let invalid;

    const invalidBill = document.querySelector(".invalid-bill");
    const invalidTip = document.querySelector(".invalid-tip");
    const invalidPeople = document.querySelector(".invalid-people");

    if (bill <= 0) {
      inputBill.classList.add("border-2", "border-red-500");
      invalidBill.classList.remove("hidden");

      invalid = true;
    }

    if (tip <= 0 || tip > 100) {
      inputTip.classList.add("border-2", "border-red-500");
      invalidTip.classList.remove("hidden");

      invalid = true;
    }

    if (people <= 0 || people > 20) {
      inputPeople.classList.add("border-2", "border-red-500");
      invalidPeople.classList.remove("hidden");

      invalid = true;
    }

    if (invalid) return;

    // Calculate tip

    const tipTotalRAW = (bill * tip) / 100;
    const tipTotal = Math.round(tipTotalRAW * 100) / 100;

    const tipPerPersonRAW = tipTotal / people;
    const tipPerPerson = Math.round(tipPerPersonRAW * 100) / 100;

    // Update output

    tipTotalEl.textContent = tipTotal;
    tipPerPersonEl.textContent = tipPerPerson;

    // Toggle reset button visibility

    btnReset.classList.remove("btn-reset-disabled");
    btnReset.classList.add("btn-reset");
  } else {
    e.preventDefault();
  }
});

// Reset button handler

btnReset.addEventListener("click", function () {
  inputBill.value = "";
  inputTip.value = "";
  inputPeople.value = "";

  tipTotalEl.textContent = "0.00";
  tipPerPersonEl.textContent = "0.00";

  btnCalculate.classList.remove("btn-calculate");
  btnCalculate.classList.add("btn-calculate-disabled");

  btnReset.classList.remove("btn-reset");
  btnReset.classList.add("btn-reset-disabled");
});
