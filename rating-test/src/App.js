import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import NewReport from "./pages/NewReport";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/reports/:id" exact component={Reports} />
              <Route path="/newreport/:id" exact component={NewReport} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
