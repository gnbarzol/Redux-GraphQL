// Constanst
let initialData = {
    loggedIn: false,
}

let LOGIN = 'LOGIN';
// Reducers
export default function reducer(state = initialData , action) {
    switch(action.type) {
        case LOGIN:
            return;
        default:
            return state;
    }
}
// Actions 