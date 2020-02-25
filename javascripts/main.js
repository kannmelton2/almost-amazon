// MAIN JS is your entry point to the application
// your init function will live here
//and it will be basically the only thing in this file

// IMPORT STATEMENTS AT TOP OF FILE
import store from './components/store.js';

const init = () => {
    store.makeStore();
}

init();