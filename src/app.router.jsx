import{Route,BrowserRouter as Router,Switch} from "react-router-dom";

import Header from "./components/core/headder";




import { Provider } from "react-redux";

import { store } from "./redux/store/store";
import viewemployee from "./components/employeedetails/viewemployee";
import AddEmployee from "./components/employeedetails/addemployee";
import ViewWorking from "./components/workingtable/viewworking";
import AddWorking  from  "./components/workingtable/addworking";
import  ViewHistory from  "./components/workingtable/viewhistory";
import viewsite from "./components/site/viewsite";

import addsite from "./components/site/addsite";
import Home from "./components/core/home";
import Footer from "./components/core/footer";







const AppRouter=(
    <Provider store={store}>
    <Router>
    <Header></Header>
    <Switch>
  
    <Route exact path="/viewemployee" component={viewemployee}/>
    
    <Route exact path="/addemployee" component={AddEmployee}/>
    <Route exact path="/viewworking" component={ViewWorking}/>
    <Route exact path="/addworking" component={AddWorking}/>
    <Route exact path="/viewhistory" component={ViewHistory}/>
    <Route exact path="/viewsite" component={viewsite}/>
    <Route exact path="/addsite" component={addsite}/>
    <Route exact path="/" component={Home}/>
    </Switch>
    <Footer></Footer>
    
   
    </Router>
   
    </Provider>

)


export default AppRouter