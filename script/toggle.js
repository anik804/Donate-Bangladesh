document.getElementById("card-section").style.display = "block";
document.getElementById("history-section").style.display = "none";
document.getElementById("donate-btn").addEventListener("click",
    function () {
        document.getElementById("history-section").style.display = "none";
        document.getElementById("card-section").style.display = "block";
});

document.getElementById("history-btn").addEventListener("click",
    function () {
        document.getElementById("card-section").style.display = "none";
        document.getElementById("history-section").style.display = "block";
    });