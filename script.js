let cartItems = [];

function addToCart(productId) {
    cartItems.push(productId);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    let total = 0;

    for (let productId of cartItems) {
        let listItem = document.createElement('li');

        switch (productId) {
            case 1:
                listItem.textContent = 'Windows 11 Pro';
                total += 2500;
                break;
            case 2:
                listItem.textContent = 'Office365';
                total += 1200;
                break;
            case 3:
                listItem.textContent = 'Kaspersky Anti-Virus';
                total += 350;
                break;
            default:
                listItem.textContent = 'Unknown Product';
                break;
        }

        cartList.appendChild(listItem);
    }

    document.getElementById('cart-total').textContent = 'R' + total;
}

function checkout() {
    alert('Thank you for your purchase!');
    cartItems = [];
    updateCart();
}
