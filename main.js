const routes = {
    '/': '<h1>Home Page</h1><p>Welcome to the home page.</p>',
    '/about': '<h1>About Page</h1><p>This is the about page.</p>',
    '/contact': '<h1>Contact Page</h1><p>This is the contact page.</p>',
};

// Function to handle navigation
function navigate(event) {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    history.pushState({}, '', path);
    renderPage(path);
}

// Function to render the content based on the path
function renderPage(path) {
    const content = document.getElementById('content');
    content.innerHTML = routes[path] || '<h1>404 Page Not Found</h1>';
}

// Listen for clicks on navigation links
document.querySelectorAll('a[data-navigate]').forEach(anchor => {
    anchor.addEventListener('click', navigate);
});

// Handle initial load and navigation state changes
window.addEventListener('popstate', () => renderPage(location.pathname));
window.addEventListener('load', () => renderPage(location.pathname));