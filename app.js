const countOutput = document.querySelector("#count");
const tapButton = document.querySelector("#tapButton");
const resetButton = document.querySelector("#resetButton");
const storageKey = "phone-tap-counter-count";

let count = Number.parseInt(localStorage.getItem(storageKey) ?? "0", 10);

function render() {
  countOutput.value = String(count);
  countOutput.textContent = String(count);
  localStorage.setItem(storageKey, String(count));
}

tapButton.addEventListener("click", () => {
  count += 1;
  render();
});

resetButton.addEventListener("click", () => {
  count = 0;
  render();
});

render();
