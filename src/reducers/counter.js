const initialState = JSON.parse(localStorage.getItem("cart"))
const counterReducer = (state = initialState.length, action) => {
    switch (action.type) {
        case 'COUNT_ITEM_INCREASE':
            return state + 1;
            default: return state; 
    }
}


export default counterReducer;