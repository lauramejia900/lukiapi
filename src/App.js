import './App.css';
import ComponeteApi from './MisComponentes/ComponenteApi/ComponenteApi';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ComponenteRuta from './ComponenteRuta/ComponenteRuta';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <ComponeteApi></ComponeteApi>}/>
      <Route path="/:id" exact render={(routeProps) => <ComponenteRuta {...routeProps}></ComponenteRuta>}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
