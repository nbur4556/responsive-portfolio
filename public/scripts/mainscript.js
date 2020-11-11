window.onload = function () {
    const hamburgerMenuIcon = document.getElementById('ham-menu');
    const dropdownMenu = document.getElementById('drop-menu');

    dropdownMenu.style.display = "none";

    hamburgerMenuIcon.addEventListener("click", () => {
        toggleDropdownMenu(dropdownMenu);
    });
}

function toggleDropdownMenu(dropdownMenu) {
    if (dropdownMenu.style.display == "none") {
        dropdownMenu.style.display = "flex";
    }
    else {
        dropdownMenu.style.display = "none";
    }
}