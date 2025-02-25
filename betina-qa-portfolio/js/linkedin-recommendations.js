/* Expand and collapse my LinkedIn recommendations */
function addReadMoreLink() {

    const readMoreLinks = document.querySelectorAll(".linkedin-read-more");
    const hideLinks = document.querySelectorAll(".linkedin-hide");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const card = this.closest(".linkedin-card");
            card.querySelector(".linkedin-truncated-content").style.display = "none";
            card.querySelector(".linkedin-full-content").style.display = "block";
            this.style.display = "none";
            card.querySelector(".linkedin-hide").style.display = "inline";
        });
    });

    hideLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const card = this.closest(".linkedin-card");
            card.querySelector(".linkedin-truncated-content").style.display = "-webkit-box";
            card.querySelector(".linkedin-full-content").style.display = "none";
            this.style.display = "none";
            card.querySelector(".linkedin-read-more").style.display = "inline";
        });
    });
}
document.addEventListener("DOMContentLoaded", addReadMoreLink )
