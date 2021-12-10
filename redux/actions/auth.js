import { AUTH, LOGOUT } from '../constants/actionTypes';
import * as api from '../../api';

export const login = (userDetails, navigation) => async (dispatch) => {
    try {
        const { data } = await api.login(userDetails);
        dispatch({ type: AUTH, data });
        navigation.navigate('Main');
    } catch (error) {
        console.log(error);
    }
}

export const register = (userDetails, navigation) => async (dispatch) => {
    try {
        const { data } = await api.register(userDetails);
        dispatch({ type: AUTH, data });
        navigation.navigate('Main');
    } catch (error) {
        console.log(error);
    }
}