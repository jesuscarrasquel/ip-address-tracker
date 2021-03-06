import 'assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home';

import MapView from 'components/MapView';
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
