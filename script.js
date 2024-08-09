document.addEventListener("DOMContentLoaded", function() {
    var envelope = document.getElementById("envelope");
    if (envelope) {
        envelope.addEventListener("click", function() {
            console.log("Envelope clicked!");
            this.classList.toggle("open");
        });
    } else {
        console.error("Envelope element not found");
    }
});