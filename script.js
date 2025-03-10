// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Function to load content into a specific section
    function loadSection(sectionId, fileName) {
        fetch(fileName)
            .then(response => response.text())  // Get the content of the HTML file
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;  // Insert it into the corresponding section
            })
            .catch(error => console.error('Error loading section:', error));  // Handle any errors
    }

    // Load each section
    loadSection('hero', 'hero.html');
    loadSection('intro', 'intro.html');
    loadSection('services', 'services.html');
    loadSection('footer', 'footer.html');
});
