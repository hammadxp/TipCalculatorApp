const tipForm = document.getElementById("tip-form");
const tipOptions = document.getElementById("tip-options");

const inputBill = document.getElementById("bill-input");
const inputTip = document.getElementById("tip-input");
const inputPeople = document.getElementById("people-input");

const invalidBill = document.querySelector(".invalid-bill");
const invalidTip = document.querySelector(".invalid-tip");
const invalidPeople = document.querySelector(".invalid-people");

const btnCalculate = document.getElementById("btn-calculate");
const btnReset = document.getElementById("btn-reset");

// Input change listener (for Calculate button visibility)

inputBill.addEventListener("input", checkInputs);
inputTip.addEventListener("input", checkInputs);
inputPeople.addEventListener("input", checkInputs);

function checkInputs() {
  if (inputBill.value && inputTip.value && inputPeople.value) {
    btnCalculate.classList.remove("btn-inactive");
    btnCalculate.classList.add("btn-active");
  } else {
    btnCalculate.classList.remove("btn-active");
    btnCalculate.classList.add("btn-inactive");
  }
}

// Tip option change handler

tipOptions.addEventListener("click", function (e) {
  e.preventDefault();

  const btn = e.target.closest("button");
  const btnCustom = e.target.closest("input");

  if (!btn && !btnCustom) return;

  // Remove active styles from all elements

  document.querySelectorAll(".tip-option").forEach((option) => {
    option.classList.remove("tip-selected-styles", "tip-selected");
  });

  document.querySelector(".tip-option-custom").classList.remove("tip-selected");

  // Add active style to selected button

  if (btn) {
    btn.classList.add("tip-selected-styles", "tip-selected");
    inputTip.value = "";
  }

  if (btnCustom) {
    btnCustom.classList.add("tip-selected");
  }
});

// Submition handler

tipForm.addEventListener("submit", function (e) {
  console.log("yes");

  e.preventDefault();

  const bill = inputBill.value;
  const people = inputPeople.value;
  const tip = tipOptions.querySelector(".tip-selected").textContent.replace("%", "");

  console.log(bill);

  if (bill <= 0) {
    inputBill.classList.add("border-2", "border-red-500");
    invalidBill.classList.remove("hidden");
  }

  if (people < 0 || people > 20) {
    inputPeople.classList.add("border-2", "border-red-500");
    invalidPeople.classList.remove("hidden");
  }

  console.log(bill, people);
});
