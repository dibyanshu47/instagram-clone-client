import { AUTH, LOGOUT } from '../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            (async () => {
                try {
                    await AsyncStorage.setItem('user', JSON.stringify({ ...action?.data }))
                    let user = await AsyncStorage.getItem('user');
                    user = JSON.parse(user);
                } catch (error) {
                    console.log(error);
                }
            })();
            return { ...state, authData: action.data };
        case LOGOUT:
            (async () => {
                try {
                    await AsyncStorage.removeItem('user');
                } catch (error) {
                    console.log(error);
                }
            })();
            return { ...state, authData: null };
        default:
            return state;
    }
}

export default authReducer;