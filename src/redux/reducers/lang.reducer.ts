import { SET_LANG } from '../types/lang.types';


    const initialState = {
        lang: "en",
    };

    const langReducer = (state = initialState, action: {type: string, payload: string}) => {
      
      const {type, payload} = action;

        switch (type) {
            case SET_LANG:
               return {
                 ...state, lang: payload,
               };
             default: return state;
        }
    };

    export default langReducer;