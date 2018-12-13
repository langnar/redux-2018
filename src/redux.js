import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

//middlware
// const logger = function(store) {
//   return function(next) {
//     return function(action) {
//       console.log(action);
//       console.log("state: ", store.getState());
//       next(action);
//     };
//   };
// };

const createId = () => Math.random();
const initialState = {
  books: [],
  readers: [1]
};

const books = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_BOOK":
      return [...state, { id: createId(), title: payload }];
    case "UPDATE_BOOK":
      return state.map(item => {
        if (item.id === payload.id) {
          return { ...item, title: payload.newName };
        }
        return item;
      });
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== payload);
    default:
      return state;
  }
};

const readers = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_READER":
      return [...state, { id: createId(), title: payload }];

    case "UPDATE_READER":
      return state.map(reader => {
        if (reader.id === payload.id) {
          return { ...reader, title: payload.newName };
        }
        return reader;
      });
    case "REMOVE_READER":
      return state.filter(reader => reader.id !== payload);
    default:
      return state;
  }
};

const reducer = combineReducers({
  books: books,
  readers: readers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(logger))
);

const addButton = bookName => ({
  type: "ADD_BOOK",
  payload: bookName
});

const removeButton = id => ({
  type: "REMOVE_BOOK",
  payload: id
});

const updateButton = (id, newName) => ({
  type: "UPDATE_BOOK",
  payload: { id, newName }
});

const addReader = readerName => ({
  type: "ADD_READER",
  payload: readerName
});

const removeReader = id => ({
  type: "REMOVE_READER",
  payload: id
});

const updateReader = (id, newName) => ({
  type: "UPDATE_READER",
  payload: { id, newName }
});

store.subscribe(() => {
  console.log("from subscribe: ", store.getState());
});

console.log("===========initial============");
console.log("from subscribe: ", store.getState());

console.log("===========add============");
store.dispatch(addButton("Book 1"));
store.dispatch(addButton("Book 2"));
store.dispatch(addButton("Book 3"));

console.log("===========update============");
store.dispatch(updateButton(store.getState().books[0].id, "Updated"));

console.log("===========remove============");
store.dispatch(removeButton(store.getState().books[0].id));

console.log("===========Readers add============");
store.dispatch(addReader("Reader 1"));
store.dispatch(addReader("Reader 2"));

console.log("===========Readers update============");
store.dispatch(updateReader(store.getState().readers[0].id, "Updated readers"));

console.log("===========Readers delete============");
store.dispatch(removeReader(store.getState().readers[0].id));
