document.querySelector('.dropbtn').addEventListener('click', function () {
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });