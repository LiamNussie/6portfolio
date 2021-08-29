import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Connect from './pages/connect/connect';
import Invest from './pages/invest/invest';
import Admin from './pages/admin/admin';
import Distort from './pages/admin/distort/distort';
import Mind from './pages/mind/mind';
import Building from './pages/building/bulding';
import Running from './pages/running/running';
import PostView from './components/postView/postView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/connect" component={Connect} />
           <Route exact path="/building" component={Building} />
           <Route exact path="/running" component={Running} />
           <Route exact path="/invest" component={Invest} />
           <Route exact path="/mind" component={Mind} />
           <Route exact path="/broadcast-thoughts" component={Admin} />
           <Route exact path="/broadcast-thoughts/edit" component={Distort} />
           <Route exact path="/post" component={PostView} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
