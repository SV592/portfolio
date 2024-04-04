function fuck() {
    document
        .querySelectorAll(".experience-item .toggle-content")
        .forEach(function (button) {
            button.addEventListener("click", function () {
                var list = this.previousElementSibling;
                if (list.style.display === "none" || list.style.display === "") {
                    list.style.display = "block";
                    this.textContent = "View Less";
                } else {
                    list.style.display = "none";
                    this.textContent = "View More";
                }
            });
        });
}
