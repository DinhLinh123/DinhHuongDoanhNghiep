
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Trangchu from './containers/Trangchu/Trangchu';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Trangchu}></Route>
      </Switch>
    </Router>
  );
}

export default App;
