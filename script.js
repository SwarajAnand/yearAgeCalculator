// console.log("working");
const dateInput = document.getElementById("dateInput");
const ageChangeArea = document.getElementById("ageChangeArea");
const ageButton = document.getElementById("ageButton");

ageButton.addEventListener("click", () => {
  let date = new Date();
  let currYear = date.getFullYear();

  let pastDate = dateInput.value;
  let pastYear = parseInt(pastDate.slice(0, 4));

  if (pastYear <= currYear) {
    ageChangeArea.innerHTML = "";
    ageChangeArea.innerHTML = currYear - pastYear;
  } else {
    alert("Please Enter a Valid Date");
  }

  console.log(pastYear);
});
