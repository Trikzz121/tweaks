function buyProduct(productName, price) {

    const modal = document.getElementById("purchaseModal");
    const productText = document.getElementById("modalProduct");
    const priceText = document.getElementById("modalPrice");
    const checkoutButton = document.getElementById("checkoutButton");

    productText.textContent = productName.toUpperCase();
    priceText.textContent = price;

    /*
        PUT YOUR PAYMENT LINK HERE.

        Example:

        checkoutButton.href = "YOUR-PAYMENT-LINK-HERE";
    */

    checkoutButton.href = "#";

    modal.classList.add("active");
}


function closeModal() {

    const modal = document.getElementById("purchaseModal");

    modal.classList.remove("active");
}


document
    .getElementById("purchaseModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


function downloadProduct(event) {

    event.preventDefault();

    alert(
        "Your download link has not been connected yet."
    );

}
