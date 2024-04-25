import React, { PureComponent } from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import "./style.css";
import store from "./store";
import About from "./pages/about";

export default class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
          <About/>
        </div>
      </div>
    );
  }
}
