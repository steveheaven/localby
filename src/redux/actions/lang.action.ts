  import { SET_LANG } from '../types/lang.types';


    export const setLang = (lang: string) => (dispatch: (arg0: { type: string; payload: string }) => void) => {
        dispatch({
            type: SET_LANG,
            payload: lang
        });
    };