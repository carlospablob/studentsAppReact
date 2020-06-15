import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Component
import HeaderComponent from "./Components/header/header.component";
import HomeComponent from "./Components/Home.component";
import NewStudent from "./Components/NewStudent.component";

function App() {
  return (
      <React.Fragment>
        <Provider store={store} >
          <Router >
            <HeaderComponent/>
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/nuevo-estudiante/" component={NewStudent} />
              {/*<Route exact path="/editar-personaje/:id" component={EditCharacter} />*/}
              {/*<Route exact path="/detalles/:id" component={CharacterDetailsComponent} />*/}
            </Switch>
          </Router>
        </Provider>
      </React.Fragment>
  );
}

export default App;
