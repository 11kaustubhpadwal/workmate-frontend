import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Navbar from "./components/shared-components/Navbar";
import Credits from "./components/shared-components/Credits";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Credits />
    </Router>
  );
}

export default App;
