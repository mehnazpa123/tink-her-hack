// ---------------- OPTIONS ----------------
function addOptionInput() {
    const container = document.getElementById("options-container");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Option ${container.children.length + 1}`;
    input.classList.add("option-input"); // optional, for styling
    container.appendChild(input);
}

function saveOptions() {
    const options = [...document.querySelectorAll("#options-container input")]
        .map(i => i.value)
        .filter(v => v.trim() !== ""); // ignore empty inputs

    if (options.length === 0) {
        alert("Please add at least one option!");
        return;
    }

    localStorage.setItem("options", JSON.stringify(options));
    window.location.href = "factors.html"; // navigate to next page
}

// ---------------- FACTORS ----------------
function addFactorInput() {
    const container = document.getElementById("factors-container");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Factor ${container.children.length + 1}`;
    input.classList.add("factor-input"); // optional, for styling
    container.appendChild(input);
}

function saveFactors() {
    const factors = [...document.querySelectorAll("#factors-container input")]
        .map(i => i.value)
        .filter(v => v.trim() !== ""); // ignore empty inputs

    if (factors.length === 0) {
        alert("Please add at least one factor!");
        return;
    }

    localStorage.setItem("factors", JSON.stringify(factors));
    window.location.href = "rating.html"; // navigate to next page
}