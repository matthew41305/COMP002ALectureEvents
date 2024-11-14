// alert only on the first click
const alertButton = document.getElementById("alertButton");
function showAlertOnce() {
    alert("Button clicked! This alert will only appear once.");
    // event listener goes away after the first click
    alertButton.removeEventListener("click", showAlertOnce);
}
alertButton.addEventListener("click", showAlertOnce);

// custom alert
const favoriteLink = document.getElementById("favoriteLink");
favoriteLink.addEventListener("click", function(event) {
    // stops normal nav - wont allow you to open the webite and displays custom message instead
    event.preventDefault();
    // custom alert message
    alert("No distractions! I’m coding!");
});
