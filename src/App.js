import { Switch, Route } from 'react-router-dom'
import GameDetails from './components/GameDetails'
import GamesList from './components/GamesList'

import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path='/' component={GamesList}/>
        <Route path="/:id" component={GameDetails}/>
     </Switch>
    </div>
  );
}

export default App;
