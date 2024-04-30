function applyBackground() {
    var background = document.getElementById("background-select").value;
    var imagePath = '';
    if(background === 'lightblue') {
        imagePath = 'images/lions.jpg';
    } else if(background === 'lightgold') {
        imagePath = 'images/lionswidth400.jpg'; 
    }
    document.body.style.backgroundImage = `url('${imagePath}')`;
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
