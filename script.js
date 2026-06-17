let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

function searchProducts() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let title = card
            .querySelector("h2")
            .innerText
            .toLowerCase();

        if(title.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}