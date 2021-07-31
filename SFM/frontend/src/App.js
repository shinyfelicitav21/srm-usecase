import './App.css';
import LoginPage from './Components/common/LoginPage';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Dashboard from './Components/user/Dashboard';
import ComplaintRequest from './Components/user/ComplaintRequest';
import ProfileDetails from './Components/user/ProfileDetails';
import ADashboard from './Components/admin/ADashboard';
import ComplaintReport from './Components/admin/ComplaintReport';
import PaymentReport from './Components/admin/PaymentReport';
import EventHistory from './Components/admin/EventHistory';
import AddComplaintReport from './Components/admin/AddComplaintReport';
function App() {
  return (
   
    <Router>
     
        <li>
          <Link to="/login">LoginPage</Link>
        </li>
        {/* <li>
          <Link to="/dash">Dashboard</Link>
        </li> */}
        <Switch>
         
          <Route path="/login" exact component={LoginPage}></Route>
          <Route path="/dash" exact component={Dashboard}></Route>
          <Route path="/complaint" exact component={ComplaintRequest}></Route>
          <Route path="/profile" exact component={ProfileDetails}></Route>
           <Route path="/dashboard" exact component={ADashboard}></Route>
          <Route path="/report" exact component={ComplaintReport}></Route>
          <Route path="/payreport" exact component={PaymentReport}></Route> 
          <Route path="/eventhistory" exact component={EventHistory}></Route> 
          <Route path="/addcomplaint" exact component={AddComplaintReport}></Route> 
        </Switch>
      
    </Router>
  
  );
}

export default App;
