// target Home 
let home_btn = document.getElementById('home');
console.log(home_btn);

home_btn.addEventListener('click', () => {
    window.location.href = '../html_files/home.html';
    // window.open('../html_files/home.html')
});

let userEmail = document.getElementById('userEmail');

// target user icon button
let user_btn = document.getElementById('user');
console.log(user_btn);

// target logout id button
let logout_box = document.getElementById('logout_box');
console.log(logout_box);
logout_box.style.display = 'none';

user_btn.addEventListener('click', (event) => {
    // event.preventDefault()
    if (logout_box.style.display === 'none') {
        logout_box.style.display = 'block';
        logout_box.style.textAlign = 'center';
        logout_box.style.paddingTop = '20px';
    } else{
        logout_box.style.display = 'none';
    }
});

// target logout button
let logout_btn = document.getElementById('logout_btn');
logout_btn.addEventListener('click', () => {
    window.location.href = '../index.html';
});

// fetching
fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        let data1 = "";
        data.forEach((values, index) => {
            data1 += `<div id="container">
                <div class="image_border">
                    <img src="${values.image}" alt="" class="Product_img">
                </div>
                <div class="product_details_border">
                    <div class="product_details">
                        <div class="P_title">${values.title}</div>
                        <p class="category">${values.category}</p>
                        <p class="price"><span> &#8377; ${values.price}</span></p>
                        <p class="rating">
                            <span class='rate'>${values.rating.rate} &#9733;</span>
                            &nbsp;
                            <span>(${values.rating.count})</span>
                        </p>
                    </div>
                    <div class="cart">
                        <button class="add_to_cart" id="add_to_cart_${index}" data-id="${values.id}" data-title="${values.title}" data-price="${values.price}" data-image="${values.image}" data-rating="${values.rating.rate}" data-category="${values.category}">Add To Cart</button>
                    </div>
                </div>
            </div>`;
        });
        document.getElementById('parent').innerHTML = data1;

        // Add event listeners to the "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add_to_cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
    })
    .catch((error) => {
        console.log(error);
    });

function addToCart(event) {
    const button = event.target;
    const product = {
        id: button.dataset.id,
        title: button.dataset.title,
        price: button.dataset.price,
        image: button.dataset.image,
        rating: button.dataset.rating,
        category: button.dataset.category,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        alert('Item is already in the cart.');
    } else {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to the cart.');
    }

    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart_num').textContent = cart.length;
}

// TARGET ADD TO CART 
let cartIcon = document.getElementById('cart_plus');

cartIcon.addEventListener('click', () => {
    window.location.href = '../html_files/add_to_cart.html';
});

updateCartCount();
