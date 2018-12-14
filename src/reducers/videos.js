const ADD_VIDEO = "ADD_VIDEO";
const EDIT_VIDEO = "EDIT_VIDEO";
const REMOVE_VIDEO = "REMOVE_VIDEO";

export default function videosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_VIDEO:
      const newItem = {
        id: Date.now().toString(),
        title: payload.title,
        url: payload.url,
        tags: payload.tags
      };
      return [newItem, ...state];

    case REMOVE_VIDEO:
      return state.filter(item => item.id !== payload.id);

    case EDIT_VIDEO:
      return state.map(item => {
        if (item.id === payload.id) {
          return { ...item, title: payload.newTitle, tags: payload.newTags };
        }
      });

    default:
      return state;
  }
}

export const addVideo = ({ title, url, tags }) => ({
  type: ADD_VIDEO,
  payload: { title, url, tags }
});

export const removeVideo = id => ({
  type: REMOVE_VIDEO,
  payload: { id }
});

export const editVideo = (id, newTitle, newTags) => ({
  type: EDIT_VIDEO,
  payload: { id, newTitle, newTags }
});
