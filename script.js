document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML content into a specified element
    function loadSection(sectionId, fileName) {
        fetch(fileName)
            .then(response => response.text())
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
            })
            .catch(error => console.error('Error loading section:', error));
    }

    // Load each section
    loadSection('hero', 'hero.html');
    loadSection('intro', 'intro.html');
    loadSection('services', 'services.html');
    loadSection('footer', 'footer.html');
});
