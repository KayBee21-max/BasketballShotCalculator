document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", calculatePercentage);
});

function calculatePercentage() {
    let totalShots = parseInt(document.getElementById("totalShots").value);
    let shotsMade = parseInt(document.getElementById("shotsMade").value);
    
    // Error Handling
    if (isNaN(totalShots) || isNaN(shotsMade)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }
    if (shotsMade > totalShots) {
        document.getElementById("result").innerText = "Can't make shots you have taken!";
        return;
    }
    if (totalShots === 0) {
        document.getElementById("result").innerText = "Sorry, didn't realise we had Ben Simmons here!";
        return;
    }

    // Calculate shooting percentage
    let percentage = (shotsMade / totalShots) * 100;

    document.getElementById("result").innerText = 
        `Shooting Percentage: ${percentage.toFixed(2)}%`;
}
