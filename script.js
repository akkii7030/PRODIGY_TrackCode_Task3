function toggleSection(sectionId) {
    
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('#navbar ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var sectionId = link.getAttribute('href').substring(1); 
            toggleSection(sectionId);
            event.preventDefault(); 
        });
    });
});
