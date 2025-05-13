function openContactForm () {
    const modal = document.getElementById("contactModal");
    const openModalBtns = document.querySelectorAll(".openModalBtn");
    const closeCFModalBtn = document.querySelector(".closeCF");

    if (!openModalBtns.length || !modal) return;

    openModalBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            modal.classList.remove("modal-hidden");
            modal.classList.add("modal-visible");
            modal.style.display = "flex";
        });
    });

    closeCFModalBtn.addEventListener("click", function() {
        modal.classList.remove("modal-visible");
        modal.classList.add("modal-hidden");
        setTimeout(() => modal.style.display = "none", 300);
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => modal.style.display = "none", 300);
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.classList.remove("show");
            setTimeout(() => modal.style.display = "none", 300);
        }
    });
}

document.addEventListener("DOMContentLoaded", openContactForm)
