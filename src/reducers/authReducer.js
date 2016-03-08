import { LOGIN_REQUEST}


// The auth Reducer. The starting state sets authentication based on a token
// being in local storage.
// We would also want a util to check if token is expired in future.
export default function(state = { isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false }, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            })
    }
}