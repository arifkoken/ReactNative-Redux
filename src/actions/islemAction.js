
import { SAYI_DEGISTIR } from './types';

export const sayiChanged = (sayi) => (dispatch) => {
    dispatch({
      type: SAYI_DEGISTIR,
      payload: sayi
    });
  };
