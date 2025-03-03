document.getElementById("card-section").style.display = "block";
document.getElementById("history-section").style.display = "none";

// Set initial button colors
// mane by default jeita krsi okhane
document.getElementById("donate-btn").style.backgroundColor = "#3498db"; // Blue
document.getElementById("history-btn").style.backgroundColor = "#95a5a6"; // Gray

document.getElementById("donate-btn").addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("card-section").style.display = "block";

    // Change button colors
    document.getElementById("donate-btn").style.backgroundColor = "#3498db"; // Blue (Active)
    document.getElementById("history-btn").style.backgroundColor = "#95a5a6"; // Gray (Inactive)
});

document.getElementById("history-btn").addEventListener("click", function () {
    document.getElementById("card-section").style.display = "none";
    document.getElementById("history-section").style.display = "block";

    // Change button colors
    document.getElementById("history-btn").style.backgroundColor = "#3498db"; // Blue (Active)
    document.getElementById("donate-btn").style.backgroundColor = "#95a5a6"; // Gray (Inactive)
});
