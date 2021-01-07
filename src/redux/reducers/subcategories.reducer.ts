import { SET_SUBCATEGORIES } from '../types/subcategories.types';


    const initialState = {
        filters: [{
            categoryName: "food",
            subcategories: [{
                name: "fresh_fruit",
                checked: false
            },
            {
                name: "fresh_vegetables",
                checked: false
            }
        ]
        },
        {
                categoryName: "home",
                subcategories: [{
                    name: "candles",
                    checked: false
                },
                {
                    name: "bathroom",
                    checked: false
                },
                {
                    name: "wall_decorations",
                    checked: false
                },
                {
                    name: "ceramics",
                    checked: false
                },
                {
                    name: "furniture",
                    checked: false
                },
                {
                    name: "bed",
                    checked: false
                },
                {
                    name: "statues",
                    checked: false
                },
                {
                    name: "paperwork",
                    checked: false
                },
                {
                    name: "lightning",
                    checked: false
                },
                {
                    name: "spirituality",
                    checked: false
                },
                {
                    name: "other",
                    checked: false
                }
            ]
            }
    ],
        price: {
            from: 0,
            to: 0
        }
    };

    const subcategoriesReducer = (state = initialState, action: {type: string, payload: string}) => {
      
      const {type, payload} = action;

        switch (type) {
            case SET_SUBCATEGORIES:
               return {
                 ...state, subcategories: payload,
               };
             default: return state;
        }
    };

    export default subcategoriesReducer;