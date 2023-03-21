// random player
const users = {
  users: ["أمينة", "ايمان", "نور", "نورة", "مها"],
};

function selectUser() {
  if (users.users.length === 0) {
    document.getElementById("selected-user").textContent = "No players left";
    return;
  }
  const userIndex = Math.floor(Math.random() * users.users.length);
  const selectedUser = users.users[userIndex];
  users.users.splice(userIndex, 1); // Remove the selected user from the array
  document.getElementById(
    "selected-user"
  ).textContent = `Selected Player is: ${selectedUser}`;
}
// RANDOM AYAH

function selectAyah(){

  fetch("ayats.json")
    .then((response) => response.json())
    .then((data) => {
      const ayaElement = document.getElementById("aya");
      const randomButton = document.getElementById("randomButton");
      const nextButton = document.getElementById("nextAya");
      let currentIndex = -1; // Declare a variable to hold the index of the current random aya
  
      // Define a function to choose a random aya and display it
      function displayRandomAya() {
        const ayas = data.aya;
        const randomIndex = Math.floor(Math.random() * Object.keys(ayas).length);
        const randomAya = ayas[`aya_${randomIndex}`];
        currentIndex = randomIndex; // Set the index of the current random aya to the randomly selected index
        ayaElement.textContent = randomAya;
      }
  
      // Define a function to display the next aya
      function displayNextAya() {
        const ayas = data.aya;
        currentIndex = (currentIndex + 1) % Object.keys(ayas).length; // Increment the index of the current random aya
        const nextAya = ayas[`aya_${currentIndex}`];
        ayaElement.textContent = nextAya;
      }
  
      // Call the function to display an initial random aya
      displayRandomAya();
  
      // Add an event listener to the button to display a new random aya when clicked
      randomButton.addEventListener("click", displayRandomAya);
  
      // Add an event listener to the button to display the next aya when clicked
      nextButton.addEventListener("click", displayNextAya);
    });
}
