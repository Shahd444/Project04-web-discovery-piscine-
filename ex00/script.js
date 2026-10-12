const themeButton = document.getElementById('theme-button');

function changeTheme() {
    document.body.classList.toggle('dark-theme');
}

themeButton.addEventListener('click', changeTheme);