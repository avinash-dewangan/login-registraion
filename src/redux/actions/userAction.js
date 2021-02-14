import { SIGNUP_USER, LOGIN_USER, SET_CURRENT_USER, LOGOUT_USER } from '../actions/types'
import axios from 'axios'
import setAuthonticationToken from './setAuthonticationToken'
import jwt from 'jsonwebtoken';
export const signupUser = (username, email, password, confirmPassword) => {
    return function (dispatch) {
        var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/userapi/signup`,
            data: {
                username: username,
                email: email,
                password: password,
                confirmpassword: confirmPassword
            },
            headers:
            {
                'content-type': 'application/json',
                // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImF2aW5hc2giLCJ1c2VyaWQiOiI2MDE5YTJkNDQ0NTFlZmExYzQxNDQyYTAiLCJpYXQiOjE2MTI2ODU4MjMsImV4cCI6MTYxMjcxNDYyM30.bhS99a37D91k5eZRNvdr4QFhW5STHSZ2uBQE6LtHMdg'
            },
        };

        axios(options)
            .then(res => {
                const msg = res.data.message;
                dispatch({
                    type: SIGNUP_USER,
                    payload: msg
                });
                console.log(res)
            })
            .catch(err => console.log(err));
    }

}

export const loginUser = (username, password) => {

    return function (dispatch) {
        var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/userapi/login`,
            data: {
                username: username,
                password: password
            },
            headers:
            {
                'content-type': 'application/json',
            },
        };

        axios(options)
            .then(res => {
                const message = res.data.message;
                if (message === 'User Found') {
                    const token = res.data.token;
                    localStorage.setItem('jwtToken', token)
                    setAuthonticationToken(token);
                    //console.log(jwt.decode(token));
                    dispatch(setCurrentuser(jwt.decode(token)));

                    dispatch({
                        type: LOGIN_USER,
                        payload: message,
                        isLoggedIn: true
                    });
                    console.log(res)
                } else {
                    dispatch({
                        type: LOGIN_USER,
                        payload: message,
                        isLoggedIn: false
                    });
                }

            })
            .catch(err => console.log(err));
    }

}

export const setCurrentuser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}


export const LogoutUser = () => {
    return function (dispatch) {
        localStorage.removeItem('jwtToken');
        console.log(localStorage)
        setAuthonticationToken(false);
        dispatch(setCurrentuser({}));
        dispatch({ type: LOGOUT_USER });
    }
}