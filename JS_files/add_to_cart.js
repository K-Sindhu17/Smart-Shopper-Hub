document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const item_list = document.querySelector('.item_list');
    item_list.innerHTML = '';

    let totalPrice = 0;
 
    cart.forEach((item, index) => {

        if (item.quantity > 0) {
            const itemHTML = `
                <div class="cart_item" id="cart_item_${index}">
                    <div class="image">
                        <img src="${item.image}" class="photo" alt="${item.title}">
                    </div>
                    <div class="name">${item.title}</div>
                    <div class="price">&#8377; ${item.price}</div>
                    <div class="Quantity">
                        <span class="minus brd" data-id="${item.id}" data-action="decrease">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus brd" data-id="${item.id}" data-action="increase">+</span>
                        <span class="brd1"><i class="fa-regular fa-trash-can" data-id="${item.id}" data-action="remove"></i></span>
                    </div>
                </div>
            `;
            item_list.innerHTML += itemHTML;
            totalPrice += item.price * item.quantity;
        }
    });

    document.querySelector('.cost').textContent = totalPrice;

    document.querySelectorAll('.minus, .plus, .fa-trash-can').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });
});

function updateQuantity(event) {
    const button = event.target;
    const action = button.dataset.action;
    const productId = button.dataset.id;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex === -1) return;

    if (action === 'increase') {
        cart[productIndex].quantity += 1;
    } 
    else if (action === 'decrease') {
        cart[productIndex].quantity = Math.max(0, cart[productIndex].quantity - 1);
        if (cart[productIndex].quantity === 0) {
            cart.splice(productIndex, 1);
        }
        
    }  
    else if (action === 'remove') {
        cart.splice(productIndex, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Reload the page to reflect changes
}


// target submit button

let submit_btn = document.getElementById('submit_btn')
// console.log(submit_btn);

submit_btn.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        document.write('<h1>Order Successfully placed</h1>');
    } else {
        alert('Cart is empty, add items');
    }
})