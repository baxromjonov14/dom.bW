document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const cards = document.querySelectorAll(".card"); 

    items.forEach(item => {
        item.addEventListener("click", function () {
            
            const color = this.getAttribute("data-color");

         
            cards.forEach(card => {
                card.style.backgroundColor = color;
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item2");

    items.forEach(item2 => {
        
        item2.addEventListener("click", function () {

            items.forEach(i => i.classList.remove("active"));

            item2.classList.add('active');

            document.body.style.backgroundColor = this.getAttribute("data-color");
        })
    })
})