import './App.css';
import "./Components/style.scss"
import {BrowserRouter as Router,HashRouter, Switch,Route} from "react-router-dom";
import Page from './Components/Page';
import Mouse from './Components/Mouse';
function App() {
  return (
    <div className="App">
      <Router>
        <HashRouter>
        <Switch>
          <Route path="/" exact component={Page}/>
          <Route path="/Mouse" component={Mouse}/>
        </Switch>
        </HashRouter>
      </Router>
    </div>
  );
}

export default App;
