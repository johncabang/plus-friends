import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./components/Friends";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Friends" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
