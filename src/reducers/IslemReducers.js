import { SAYI_DEGISTIR } from '../actions/types';

const INITIAL_STATE = {
  sayi: '0',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAYI_DEGISTIR:
        return { ...state, sayi: action.payload };
  default:
      return state;

  }
};
