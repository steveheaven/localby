  import { SET_SUBCATEGORIES } from '../types/subcategories.types';


    export const setLang = (lang: string) => (dispatch: (arg0: { type: string; payload: string }) => void) => {
        dispatch({
            type: SET_SUBCATEGORIES,
            payload: lang
        });
    };