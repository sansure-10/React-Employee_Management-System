import{applyMiddleware, createStore,compose} from "redux";
import thunk from "redux-thunk";
import { rootReduser } from "../reducer";

export const store=createStore(rootReduser,compose(applyMiddleware(thunk)))

store.subscribe(()=>{
    console.log("store",store.getState())

})
