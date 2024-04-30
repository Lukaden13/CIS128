function applyBackground() {
    var background = document.getElementById("background-select").value;
    switch (background) {
        case "lightblue":
            document.body.style.backgroundImage = "url('images/lions.jpg')";
            break;
        case "lightgold":
            document.body.style.backgroundImage = "url('images/lionswidth400.jpg')";
            break;
        default:
            document.body.style.backgroundImage = "none";  // No background image
    }

function updateName() {
    const name = document.getElementById("username").value;
    localStorage.setItem("name", name);
    document.getElementById("name-placeholder").textContent = name || "Guest";
}

window.onload = function() {
    const storedName = localStorage.getItem("name");
    document.getElementById("name-placeholder").textContent = storedName || "Guest";
};
