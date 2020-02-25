import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js'

const addToCartEvent = () => {
    console.log('you clicked add to cart');
    // let domString = '';
    //  domString += 'This is the Cart';
    // util.printToDom('cart-container', domString)
}

const makeStore = () => {
    const book = bookData.getBook();
    let domString = '';
    domString += `<h2>${book.name}</h2>`;
    domString += '<button id="add-to-cart-button" class="btn btn-danger">Add to Cart</button>'
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};

// EXPORT -- YOU CAN ONLY EXPORT ONE THING, USE AN OBJECT - ES6 - if key: value are same thing, you only have to write it once
// EXPORTS GO AT BOTTOM
export default { makeStore };