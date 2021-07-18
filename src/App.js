//components
import Details from './pages/Details';
import Login from './pages/Login';
import Home from './pages/Home';
//router
import { Route, Switch } from 'react-router';

// styles 
import {GlobalStyles} from './components/GlobalStyles';
import Navigation from './components/Navigation';

function App() {


  return (
    <div>
      <GlobalStyles/> 
      <Navigation/>
      <Switch>
        <Route path='/details/:id' component={Details} />
        <Route path='/home' component={Home} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
