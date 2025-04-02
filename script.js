document.getElementById("generate").addEventListener("click", function () {
  // Get input values
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  // Validate inputs
  if (isNaN(min) || isNaN(max)) {
    alert("Please enter valid numbers");
    return;
  }

  if (min >= max) {
    alert("Minimum must be less than maximum");
    return;
  }

  // Generate random number
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Display result
  document.getElementById("output").textContent = randomNumber;
});
