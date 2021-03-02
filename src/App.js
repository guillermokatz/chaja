import Navbar from './components/Navbar';
import Chaja from './components/Chaja';
import Login from './components/Login';
import UserPanel from './components/UserPanel';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Switch>
       
        <Route exact path='/' component={Chaja}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/user' component={UserPanel}/>
      
      </Switch>
        
      <Navbar/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
