// alert only on the first click
const alertButton = document.getElementById("alertButton");
function showAlertOnce() {
    alert("Button clicked! This alert will only appear once.");
    // event listener goes away after the first click
    alertButton.removeEventListener("click", showAlertOnce);
}
alertButton.addEventListener("click", showAlertOnce);

