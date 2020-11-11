window.onload = function () {
    const hamburgerMenuIcon = document.getElementById('ham-menu');
    const dropdownMenu = document.getElementById('drop-menu');

    hamburgerMenuIcon.addEventListener("click", () => {
        toggleDropdownMenu(dropdownMenu);
    });
}

function toggleDropdownMenu(dropdownMenu) {
    if (dropdownMenu.style.display == "flex") {
        dropdownMenu.style.display = "none";
    }
    else {
        dropdownMenu.style.display = "flex"
    }
}