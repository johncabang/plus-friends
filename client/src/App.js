import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/friends" component={Friends} />
        <Route path="/addfriend" component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
