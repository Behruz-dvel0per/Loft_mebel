function addToCart(itemName) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }
    cart.push(itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
}


function addToFavorites(itemName) {
    let likedItems = localStorage.getItem('likedItems');
    if (!likedItems) {
        likedItems = [];
    } else {
        likedItems = JSON.parse(likedItems);
    }
    if (!likedItems.includes(itemName)) {
        likedItems.push(itemName);
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }
}


function goToCart() {
    window.location.href = 'cart.html';
}

function goToFavorites() {
    window.location.href = 'favorites.html';
}

function clearCart() {
    localStorage.removeItem('cart');
    alert('Tozalandi!');
}


const heartDOM = document.querySelector('.js-heart');
let liked = false;

heartDOM.onclick = (event) => {
	liked = !liked; 
	
	const target = event.currentTarget;
	
	if (liked) {
		target.classList.remove('far');
		target.classList.add('fas', 'pulse');
	} else {
		target.classList.remove('fas');
		target.classList.add('far');
	}
}

heartDOM.addEventListener('animationend', (event) => {
	event.currentTarget.classList.remove('pulse');
})