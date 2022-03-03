import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import StudentRegistration from "./components/forms/StudentRegistration.js";
import FacultyRegistration from "./components/forms/FacultyRegistration.js";
import Image from "./components/Image";
import StudentLogin from "./components/forms/StudentLogin.js";
import FacultyLogin from "./components/forms/FacultyLogin.js";
import Header from "./components/header/Header.js";
import StudentProfile from "./components/profilePage/StudentProfile.js";
import FacultyProfile from "./components/profilePage/FacultyProfile.js";
import FPHeader from "./components/profilePage/pheader/FPHeader.js";
import SPHeader from "./components/profilePage/pheader/SPHeader.js";
function App() {
  return (
    <div className="app">
      
          <Router>
            <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/facultyLogin" exact component={Header} />
            <Route path="/studentRegistration" exact component={Header} />
            <Route path="/facultyRegistration" exact component={Header} />
            <Route path="facultyProfile" component={FPHeader} />
            <Route path="studentProfile" component={SPHeader} /> 
            </Switch>
            
            <Image />
            <Switch>
              <Route path="/" exact component={StudentLogin} />
              <Route
                path="/facultyRegistration"
                component={FacultyRegistration}
              />
              <Route path="/facultyLogin" component={FacultyLogin} />
              <Route
                path="/studentRegistration"
                component={StudentRegistration}
              />
              <Route path="/studentProfile" component={StudentProfile} />
              <Route path="/facultyProfile" component={FacultyProfile} />
            </Switch>
          </Router>

          
    </div>
  );
}

export default App;
