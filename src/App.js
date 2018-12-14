import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./containers/List";
import Form from "./containers/Form";
import Search from "./containers/Search";
import { Provider } from "react-redux";
import storeCreator from "./store";

const store = storeCreator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          search by title: <Search searchField="title" />
          search by tag: <Search searchField="tags" />
          <Form />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
