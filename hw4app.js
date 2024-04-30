function applyBackground() {
    var background = document.getElementById("background-select").value;
    document.body.style.backgroundImage = `url('images/${background}.jpg')`;
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
