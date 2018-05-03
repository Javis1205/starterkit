import * as types from './type';

export function appInitialized() {
    return async function(dispatch, getState) {
        // since all business logic should be inside redux actions
        // this is a good place to put your app initialization code
        dispatch(changeAppRoot('login'));
    };
}
export function changeAppRoot(root) {
    return {type: types.ROOT_CHANGED, root: root};
}
export function action(type, payload){
    return {
        type: type,
        payload: payload
    }
}
export function login(payload) {
    return async function(dispatch, getState) {
      // login logic would go here, and when it's done, we switch app roots
      dispatch(changeAppRoot('after-login'));
      dispatch(action(types.LOGIN, payload));
    };
}
export function logout() {
    return async function(dispatch, getState) {
      // login logic would go here, and when it's done, we switch app roots
      dispatch(changeAppRoot('login'));
      dispatch(action(types.LOGOUT));
    };
}