window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#444';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
