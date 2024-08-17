function showPage(pageId) {
    // Alle Seiten verbergen
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Gewählte Seite anzeigen
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    if (username === 'test' && password === 'test') {
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('main-content').classList.add('active');
        showPage('home');
    } else {
        errorElement.classList.add('show');
    }
}

// Standardmäßig die Login-Seite anzeigen
document.addEventListener('DOMContentLoaded', () => {
    showPage('login-page');
});
