document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        
        item.addEventListener("click", function () {

            items.forEach(i => i.classList.remove("active"));

            item.classList.add('active');

            document.body.style.backgroundColor = this.getAttribute("data-color");
        })
    })
})