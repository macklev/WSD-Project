// Simple button click example
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("helloButton");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Hello! You clicked the button!");
        });
    }
});
