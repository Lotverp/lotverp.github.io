document.addEventListener("DOMContentLoaded", function() {
    // Effetto fade-in per il contenuto
    document.querySelector("main").classList.add("visible");

    // Effetti di scorrimento per le sezioni
    let sections = document.querySelectorAll("section");
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
