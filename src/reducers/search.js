const UPDATE_SEARCH = "UPDATE_SEARCH";

export default function videosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        [payload.serchField]: payload.value
      };

    default:
      return state;
  }
}

export const updateSearch = (serchField, value) => ({
  type: UPDATE_SEARCH,
  payload: {
    serchField,
    value
  }
});
