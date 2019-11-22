import React from 'react';
import Layout from './pages/home/layout/Layout'
import Detail from './pages/detail/Detail'
import  { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/index' component={Layout}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Redirect from='/' to='/index'></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
 