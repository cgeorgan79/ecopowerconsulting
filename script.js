function loadSection(sectionId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadSection('hero', 'hero.html');
    loadSection('intro', 'intro.html');
    loadSection('services', 'services.html');
    loadSection('footer', 'footer.html');
});
