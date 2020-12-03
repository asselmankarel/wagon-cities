const citiesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return [];
  }
};

export default citiesReducer;
