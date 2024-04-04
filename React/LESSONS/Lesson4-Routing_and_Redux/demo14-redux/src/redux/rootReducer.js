const initialState = {
  counter: 0,
};

// state - current state
// action - {type: 'WHAT_TO_DO' , [payload: value]}
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + action.payload };

    case 'DECREMENT':
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};

export default counterReducer;
