import './App.css';
import Customer from './Customer';
import Trainers from './Trainers';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchAppBar from './Appbar';
import {makeStyles} from '@material-ui/core/styles';

function App() {
  
  return (
    <Router>   
       <div className="App">
      <SearchAppBar/>
      <Switch>
        <Route exact from="/" render={props => <Customer {...props}/>} />
        <Route exact path="/trainings" render={props => <Trainers {...props}/>}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
