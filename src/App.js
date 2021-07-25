import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './components/csscommon/app.css';
import Home from "./components/pages/home/Home";
import Sales from "./components/sales/Sales";
import Protfolio from "./components/protfolio/Protfolio";
import Watchlist from "./components/watchlist/Watchlist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/> 
      <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="/sales">
          <Sales/>
        </Route>
        <Route path="/protfolio">
            <Protfolio/>
        </Route>
        <Route path='/watchlist'>
          <Watchlist/>
        </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
