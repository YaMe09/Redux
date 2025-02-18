const actionA = {
    type: 'SELL_LEMONADE',
};
const actionB = {
    type: 'BUY_LEMONADE',
}

const LEMONADE_price = 5;
const LEMONADE_cost =2;

const LEMONADE_profit = {lager: 50, lemon: 0};

const countReducer = (state = LEMONADE_profit, action) => { 
   
    if (action.type === 'SELL_LEMONADE') {
        state.lemon -= LEMONADE_price;
        state.lager += 1;
 };
    if (action.type === 'BUY_LEMONADE') {
        state.lemon += LEMONADE_cost;
        state.lager -= 1;
    };
        return state;
    };

const store = Redux.createStore(countReducer);


function renderNow() {

document.getElementById("lager").innerHTML =
store.getState().lager;
document.getElementById("lemon").innerHTML =
store.getState().lemon;
}
store.subscribe(renderNow); 