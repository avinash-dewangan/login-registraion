import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
import SignupContainer from './SignupContainer';
import LoginContainer from './LoginContainer'
//import { signupUser } from '../actions/userAction';
import Header from './Header';
import { Route } from 'react-router-dom';

function MainContainer() {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    console.log(isLoggedIn);
    var callContainer = '';
    if (isLoggedIn === false) {
        callContainer = <><Route exact path="/" component={LoginContainer} /> <Route path="/signup" component={SignupContainer} /></>

    } else {
        callContainer = <>  <Header /><Route exact path="/" component={Todo} /></>
    }
    return (
        <>
            {callContainer}
        </>
    )
}

export default MainContainer
