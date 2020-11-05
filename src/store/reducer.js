const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);//immutable copy of the state object
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            //const newArray = [...state.results];
            //newArray.results.splice(2, 1);
            const updatedArray = state.results.filter((result, index) => result.id !== action.resultElementId);//create a new array
            return {
                ...state,
                results: updatedArray
            }

    }
    return state;
};

export default reducer;