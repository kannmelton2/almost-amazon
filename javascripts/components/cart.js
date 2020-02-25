import util from '../helpers/util.js';

const cartToDom = () => {
     let domString = '';
     domString += 'This is the Cart';
    util.printToDom('cart-container', domString);
};

export default { cartToDom };