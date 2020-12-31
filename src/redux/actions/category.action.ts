  import { SET_CATEGORY } from '../types/category.types';


    export const setCategory = (category: string) => (dispatch: (arg0: { type: string; payload: string }) => void) => {
        dispatch({
            type: SET_CATEGORY,
            payload: category
        });
    };