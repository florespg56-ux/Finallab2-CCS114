const result = document.getElementById("result");
const retryBtn = document.getElementById("retryBtn");

// Function to evaluate score
function evaluateScore(score) {

    if (score >= 90 && score <= 100) {
        return "Excellent";
    }
    else if (score >= 75 && score <= 89) {
        return "Passed";
    }
    else if (score < 75) {
        return "Failed";
    }
    else {
        return "Invalid Score";
    }
}

// Main function
function runEvaluation() {

    alert("Welcome to the Student Score Evaluator!");

    let name = prompt("Enter your name:");
    let scoreInput = prompt("Enter your score:");
    let proceed = confirm("Do you want to continue?");

    if (!proceed) {

        result.innerHTML = `
            <h2 class="invalid">Process Cancelled</h2>
            <p>User chose not to continue.</p>
        `;
        return;
    }

    if (
        name === null ||
        name.trim() === "" ||
        scoreInput === null ||
        scoreInput.trim() === ""
    ) {

        result.innerHTML = `
            <h2 class="invalid">Invalid Input</h2>
            <p>Name and score cannot be empty.</p>
        `;
        return;
    }

    let score = Number(scoreInput);

// Validation 1 - Empty Name
if (name === null || name.trim() === "") {

    result.innerHTML = `
        <h2 class="invalid">Invalid Name</h2>
        <p>Please enter your name.</p>
    `;
    return;
}

// Validation 2 - Empty Score
if (scoreInput === null || scoreInput.trim() === "") {

    result.innerHTML = `
        <h2 class="invalid">Invalid Score</h2>
        <p>Score cannot be empty.</p>
    `;
    return;
}

// Validation 3 - Non-numeric Input
if (isNaN(score)) {

    result.innerHTML = `
        <h2 class="invalid">Invalid Score</h2>
        <p>Please enter a numeric value.</p>
    `;
    return;
}

// Validation 4 - Zero Input
if (score === 0) {

    result.innerHTML = `
        <h2 class="invalid">Invalid Score</h2>
        <p>Score cannot be zero.</p>
    `;
    return;
}

// Validation 5 - Negative Input
if (score < 0) {

    result.innerHTML = `
        <h2 class="invalid">Invalid Score</h2>
        <p>Negative scores are not allowed.</p>
    `;
    return;
}

// Validation 6 - Beyond 100
if (score > 100) {

    result.innerHTML = `
        <h2 class="invalid">Invalid Score</h2>
        <p>Score cannot exceed 100.</p>
    `;
    return;
}

    let remark = evaluateScore(score);

    let remarkClass = "";

    if (remark === "Excellent") {
        remarkClass = "excellent";
    }
    else if (remark === "Passed") {
        remarkClass = "passed";
    }
    else {
        remarkClass = "failed";
    }

    result.innerHTML = `
        <div class="name">${"Name: " + name}</div>
        <div class="score">${"Score: " + score}</div>
        <div class="remark ${remarkClass}">
            ${"Remark: " + remark}
        </div>
    `;
    retryBtn.textContent = "Try Again";
}

retryBtn.addEventListener("click", runEvaluation);

// Auto start when page loads
runEvaluation();