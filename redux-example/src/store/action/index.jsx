const initialState = {
  title: "Home",
  id: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case this.state.title:
      return { ...state, ...payload };

    default:
      return state;
  }
};
