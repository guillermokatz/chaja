import Navbar from './components/Navbar';
import Chaja from './components/Chaja';
import Login from './components/Login';
import Register from './components/Register';
import UserPanel from './components/UserPanel';
import About from './components/About';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Chaja/>
        {/* <Route exact path='/' component={Chaja}/> */}
      <Switch>
       
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/user' component={UserPanel}/>
        <Route exact path='/about' component={About}/>
      
      </Switch>
        
      <Navbar/>
      </BrowserRouter>

      {/* <p style={{paddingTop: '110px'}}>
      </p>       */}
    </div>
  );
}

export default App;
