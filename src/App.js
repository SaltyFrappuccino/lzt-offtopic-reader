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
import {useState} from "react";

function App() {

    // const eventHandler = (event) => {
    //   console.log(event.target.da)
    //   setToken(event.target.body)
    // }

  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path="/thread/:id" component={Thread}/>
            <Route  path="/threads" component={Threads}/>
            <Route path="">
                <Index className={"index"}/>
                <br/>
            </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
