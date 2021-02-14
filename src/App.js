import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Import browser router
import { BrowserRouter } from "react-router-dom";
//import Todo from './redux/component/Todo';
import "./app.scss";
import MainContainer from './redux/component/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import setAuthonticationToken from './redux/actions/setAuthonticationToken'
import { setCurrentuser, LogoutUser } from './redux';
import store from './redux/store';
import jwt from 'jsonwebtoken';

function App() {

  if (localStorage.jwtToken) {
    setAuthonticationToken(localStorage.jwtToken)
    // store.dispatch(setCurrentuser(localStorage.jwtToken));
    jwt.verify(localStorage.jwtToken, process.env.REACT_APP_SECRET_KEY,
      function (err, decoded) {
        if (err) {
          store.dispatch(LogoutUser());
        } else {
          store.dispatch(setCurrentuser(decoded));
          //console.log(decoded);
        }
      });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <MainContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;
