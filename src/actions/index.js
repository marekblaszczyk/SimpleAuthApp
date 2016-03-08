// There are three possible states for our login
// process and we need actions fot each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Three possible states for out logout process.
// Since we are using JWT, we just need to remove the token
// from localStorage. These action are more useful if we
// were calling the API to log the user out.
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true,
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

function logoutError(message) {
    return {
        type: LOGOUT_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}


export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'username=${creds.username}&password=${creds.password}'
    }

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds))

        return fetch('http://localhost:3001/session/create', config)
            .then(response =>
                response.json().then(user => ({ user, response }))
                ).then(({ user, response }) => {
                if (!response.ok) {
                    // If problem, we want to dispatch the error condition
                    dispatch(loginError(user.message))
                    return Promise.reject(user)
                } else {
                    // If login was successful, set the token in local storage
                    localStorage.setItem('id_token', user.id_token)
                    // dispatch the success action
                    dispatch(receiveLogin(user))
                }
                }).catch(err => console.log("error: ", err))
    }
}

// Log the user out
export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token')
        dispatch(receiveLogout())
    }
}

