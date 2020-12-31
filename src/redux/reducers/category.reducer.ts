import { SET_CATEGORY } from '../types/category.types';


    const initialState = {
        category: "food",
    };

    const categoryReducer = (state = initialState, action: {type: string, payload: string}) => {
      
      const {type, payload} = action;

        switch (type) {
            case SET_CATEGORY:
               return {
                 ...state, category: payload,
               };
             default: return state;
        }
    };

    export default categoryReducer;