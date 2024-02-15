const spynko = document.getElementById('spynko');

spynko.addEventListener('mouseenter', function() {
    this.setAttribute('data-content', this.textContent);
    this.textContent = ''; // Rimuove il testo originale
});

spynko.addEventListener('mouseleave', function() {
    this.textContent = this.getAttribute('data-content');
});