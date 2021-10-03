import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth.jsx';

const App = () => {
  

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    
    </BrowserRouter>
  )
};

export default App;
