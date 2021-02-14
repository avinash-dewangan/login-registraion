import { ADD_TODO, GET_TODO, DELETE_TODO, TODO_LOADING } from '../actions/types'
import axios from 'axios'

export const setTodoLoading = () => {
    return {
        type: TODO_LOADING
    }
}



const urlLocal = `${process.env.REACT_APP_API_URL}/api`;



export const getTodo = (user_id) => dispatch => {
    dispatch(setTodoLoading());

    var options = {
        method: 'GET',
        url: `${urlLocal}/todo/${user_id}`,
        headers:
        {
            'content-type': 'application/json',

        },
    };
    axios(options)
        .then(res =>
            dispatch({
                type: GET_TODO,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
    // axios
    //     .get(`${urlLocal}/todo`)
    //     .then(res =>
    //         dispatch({
    //             type: GET_TODO,
    //             payload: res.data
    //         }));
}

// export const findByIdTodo = (id) => dispatch => {

//     var options = {
//         method: 'GET',
//         url: `${urlLocal}/todo/${id}`,
//         headers:
//         {
//             'content-type': 'application/json',

//         },

//     };
//     const result = axios(options)
//         .then(res => console.log(res.data))

//         .catch(err => console.log(err));
//     return result;
// }


export const deleteTodo = (id) => dispatch => {

    var r = window.confirm("Are you sure this: " + id + "?");
    if (r === true) {
        var options = {
            method: 'DELETE',
            url: `${urlLocal}/todo/${id}`,
            headers:
            {
                'content-type': 'application/json',

            },

        };
        axios(options)
            .then(res =>
                dispatch({
                    type: DELETE_TODO,
                    payload: id
                })
            )

            .catch(err => console.log(err));

        // axios
        //     .delete(`${urlLocal}/todo/${id}`)
        //     .then(res =>
        //         dispatch({
        //             type: DELETE_TODO,
        //             payload: id
        //         }))
    }

}

export const addTodo = (todo) => dispatch => {

    var options = {
        method: 'POST',
        url: `${urlLocal}/todo`,
        data: todo,
        headers:
        {
            'content-type': 'application/json',
            // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImF2aW5hc2giLCJ1c2VyaWQiOiI2MDE5YTJkNDQ0NTFlZmExYzQxNDQyYTAiLCJpYXQiOjE2MTI0NTUwNTYsImV4cCI6MTYxMjQ4Mzg1Nn0.AMs45Mz5qZ60evIH2PlG6RguxYiD0zALnnmSHuVWgNg'
        },
    };
    axios(options)
        .then(res =>
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        )
        .catch(err => console.log(err));

    // axios
    //     .post(`${urlLocal}/todo`, todo)
    //     .then(res =>
    //         dispatch({
    //             type: ADD_TODO,
    //             payload: res.data
    //         }))
}
