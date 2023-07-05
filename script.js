// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Accessing elements by their IDs
  var aboutSection = document.getElementById('about');
  var educationSection = document.getElementById('education');
  var experienceSection = document.getElementById('experience');
  var skillsSection = document.getElementById('skills');
  var projectsSection = document.getElementById('projects');
  var certificationsSection = document.getElementById('certifications');
  var interestsSection = document.getElementById('interests');

  // Adding event listeners to the navigation links
  var navigationLinks = document.querySelectorAll('.navigation a');
  navigationLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      var targetSectionId = link.getAttribute('href').substring(1); // Get the target section's ID by removing the '#' symbol
      var targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
