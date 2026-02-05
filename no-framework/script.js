// Nature-themed interactivity
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("helloButton");
    
    // Nature messages for button click
    const natureMessages = [
        "🌲 Did you know? Trees can communicate through underground fungal networks!",
        "🌊 The ocean covers 71% of Earth and produces over half of our oxygen.",
        "🦋 Butterflies can taste with their feet!",
        "🌻 Sunflowers turn to follow the sun during the day.",
        "🐝 Bees dance to communicate the location of flowers to each other.",
        "🌈 Nature's colors are created by light refraction and absorption.",
        "🌙 The moon affects Earth's tides and has inspired art for millennia.",
        "🌿 A single rainforest tree can be home to thousands of species."
    ];
    
    if (btn) {
        btn.addEventListener("click", () => {
            const randomMessage = natureMessages[Math.floor(Math.random() * natureMessages.length)];
            alert(randomMessage + "\n\nExplore more at Nature's Canvas!");
        });
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
