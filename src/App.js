import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Navbar from "./components/shared-components/Navbar";
import Credits from "./components/shared-components/Credits";
import "rsuite/dist/styles/rsuite-default.css";
import { Container, Header, Content, Footer } from "rsuite";

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Navbar />
        </Header>
        <Content>
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
        </Content>
        <Footer>
          <Credits />
        </Footer>
      </Container>
    </Router>
  );
}

export default App;
