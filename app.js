const seeMoreHandler = (button) => {
    // Find the corresponding additional content div
    const content = button.nextElementSibling;
  
    if (button.textContent === '+') {
      // Show the additional content
      content.style.display = 'block';
      button.textContent = '-';
  
      // Create a "less" button dynamically
      const lessButton = document.createElement('button');
      lessButton.textContent = '-';
      lessButton.classList.add('less-btn');
      lessButton.onclick = function() {
        content.style.display = 'none';
        button.textContent = '+';
        this.remove(); // Remove the "less" button when clicked
      };
  
      // Append the "less" button after the content
      content.parentNode.insertBefore(lessButton, content.nextSibling);
    } else {
      // Hide the additional content
      content.style.display = 'none';
      button.textContent = '+';
      
      // Remove any existing "less" button
      const lessButton = content.nextElementSibling;
      if (lessButton && lessButton.classList.contains('less-btn')) {
        lessButton.remove();
      }
    }
  };