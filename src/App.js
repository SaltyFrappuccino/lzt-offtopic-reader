import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
} from "react-router-dom";
import Index from "./pages/Index";
import Thread from "./components/Thread/Thread";
import Threads from "./components/Threads/Threads"

const [token, setToken] = useState("627bf6906b2ea9fe26fecfd83f30c71027a32fe0")

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/thread/:id" token={token} component={Thread}/>
            <Route path="/threads" token={token} component={Threads}/>
            <Route path="">
                <Index/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
