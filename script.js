const textToDisplay ="I'm Krishna Kumar Gupta...";

function displayText(index) {
    if (index <= textToDisplay.length) {
        document.getElementsByClassName("dynamic-text")[0].innerHTML = textToDisplay.substring(0, index);
        setTimeout(function () {
            displayText(index + 1);
        }, 100);
    }
}
window.onload = function () {
    displayText(0);
};
