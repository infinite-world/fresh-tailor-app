import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../RootReducer/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

let middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
let persistor = persistStore(store);

export { store, persistor };