const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD': {
      return { ...state, users: action.payload };
    }

    case 'ADD': {
      return { ...state, users: [...state.users, action.payload] };
    }

    case 'UPDATE': {
      const users = [...state.users];
      const index = users.findIndex((user) => user.id === action.payload.id);

      if (index !== -1) {
        users[index] = action.payload;
      }

      return { ...state, users };
    }

    case 'DELETE': {
      const users = state.users.filter((user) => user.id !== action.payload);

      return { ...state, users };
    }

    default:
      return state;
  }
};

export default usersReducer;
