document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", function () {
        const item = this.parentElement;
        const isActive = item.classList.contains("active");

        document.querySelectorAll(".accordion-item").forEach((el) => {
            el.classList.remove("active");
        });

        if (!isActive) {
            item.classList.add("active");
        }
    });
});