   import { combineReducers } from 'redux';


    import categoryReducer from './reducers/category.reducer';
    import langReducer from './reducers/lang.reducer';
    import authReducer from './reducers/auth.reducer';


    const rootReducer = combineReducers({
        category: categoryReducer,
        lang: langReducer,
        isAuthenticated: authReducer,
    });

    export default rootReducer;