import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Page404 from './pages/Page404/Page404'

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
