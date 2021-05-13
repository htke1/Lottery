import "./styles.css";
import { Component } from "react";
import { Home } from "./page/Home";
import { BookingPage } from "./page/BookingPage";
import { SchedulePage } from "./page/SchedulePage";
import { Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Book">
            <BookingPage />
          </Route>
          <Route path="/Timing">
            <SchedulePage />
          </Route>
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
