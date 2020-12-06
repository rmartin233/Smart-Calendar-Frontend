import axios from '../../../utils/request'
// import { actionTypes } from '../../notification/store';
import * as actionTypes from './types'
export const loginAct = data => {
    return dispatch => {
        return axios.post('/api/login', data);
    };
};

export const syncInfoAct = (userName,data) => {
    return {   
        type: actionTypes.SYNC_STATEANDINFO,
        userName:userName,
        payload: data,
    };
};

export const logoutAct = data => {
    return dispatch => {
        localStorage.removeItem('storeTOKEN');
        dispatch(syncInfoAct({}));
    };
};
