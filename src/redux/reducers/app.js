import * as types from '../actions/type';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  root: 'login' // 'login' / 'after-login'
});

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROOT_CHANGED:
      return {
        root : action.root
      }
    default:
      return state;
  }
}