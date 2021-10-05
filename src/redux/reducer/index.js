import { combineReducers } from "redux";
import { districtreduser } from "./districtreducer";

import { employeeReduser } from "./employeereducer";
import { genderreduser } from "./genderreducer";
import { historyReduser } from "./historyreducer";
import { nationalityreduser } from "./nationalityreducer";
import { sitereduser } from "./sitereducer";
import { statereduser } from "./state.reducer";
import { workingReduser } from "./workingreducer";


export const rootReduser=combineReducers({
    
    employee:employeeReduser,
    working:workingReduser,
    history:historyReduser,
    gender:genderreduser,
    district:districtreduser,
    site:sitereduser,
    state:statereduser,
    nationality:nationalityreduser

})