document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const settingsBtn = document.getElementById('settings-btn');
    const colorPicker = document.getElementById('color-picker');

    // Toggle sidebar
    menuToggle.addEventListener('click', function () {
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            mainContent.classList.remove('hidden');
        } else {
            sidebar.classList.add('hidden');
            mainContent.classList.add('hidden');
        }
    });

    // Toggle color picker visibility
    settingsBtn.addEventListener('click', function () {
        colorPicker.click();
    });

    // Change theme color
    colorPicker.addEventListener('input', function (event) {
        const color = event.target.value;
        document.documentElement.style.setProperty('--sidebar-color', color);
        document.documentElement.style.setProperty('--button-color', color);
    });
});
