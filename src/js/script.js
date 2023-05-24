const tipForm = document.getElementById("tip-form");
const tipOptions = document.getElementById("tip-options");
const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const btnReset = document.getElementById("btn-reset");

const invalidBill = document.querySelector(".invalid-bill");
const invalidTip = document.querySelector(".invalid-tip");
const invalidPeople = document.querySelector(".invalid-people");

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
  }

  if (btnCustom) {
    btnCustom.classList.add("tip-selected");
  }
});

// Submition handler

tipForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const bill = billInput.value;
  const people = peopleInput.value;
  const tip = tipOptions.querySelector(".tip-selected").textContent.replace("%", "");

  if (bill <= 0) {
    billInput.classList.add("border-2", "border-red-500");
    invalidBill.classList.remove("hidden");
  }

  if (people < 0 || people > 20) {
    peopleInput.classList.add("border-2", "border-red-500");
    invalidPeople.classList.remove("hidden");
  }

  console.log(bill, people);
});
