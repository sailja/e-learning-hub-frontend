import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import AboutScreen from './screens/AboutScreen'
import Navigation from './components/Navigation'
import EmployeeScreen from './screens/EmployeeScreen'
import AdminScreen from './screens/AdminScreen'
import AddEmployeeScreen from './screens/AddEmployeeScreen'
import  UserListScreen from './screens/UserListScreen'
import EmployeeListScreen from './screens/EmployeeListScreen'
import HomeScreen from './screens/HomeScreen'

import UserScreen from './screens/UserScreen'
import AddCourseScreen from './screens/AddCourseScreen'
import SubjectsListScreen from './screens/SubjectsListScreen'
import AddSubjectScreen from './screens/AddSubjectScreen'

import ListCourseComponent from './component/user/ListCourseComponent'
import ListSubjectsComponent from './component/user/ListSubjectsComponent'
import SubjectsPage from './screens/SubjectsPage'
import EmployeeSubjectsComponent from './component/employee/EmployeeSubjectsComponent'
import EmployeeCourseComponent from './component/employee/EmployeeCourseComponent'
import AddSubjectsInCourseComponent from './component/employee/AddSubjectsInCourseComponent'
import Navigations from './components/Navigations'
import Footer from './components/Footer'
import VideosScreen from './screens/VideosScreen'
import JobsScreen from './screens/JobsScreens'
import AddTestComponent from './component/employee/AddTestComponent'
import GetTestComponent from './component/employee/GetTestComponent'
import UserTestComponent from './component/user/UserTestComponent'
import AddQuestions from './component/employee/AddQuestions'
import PaymentPage from './component/user/PaymentPage'
import GiveTest from './component/user/GiveTest'
import purchasedTest from './component/user/purchasedTest'
import ResultComponent from './component/user/ResultComponent'

function App() {
  return (
    <div>
      <Router>
         <Navigations/>
        <div className="container">
          
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route path="/home" component={HomeScreen} />
            <Route path="/user" component={UserScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/admin" component={AdminScreen} />
            <Route path="/employee" component={EmployeeScreen} />
            <Route path="/add-employee" component={AddEmployeeScreen} />
            <Route path="/user-list" component={UserListScreen} />
            <Route path="/emp-list" component={EmployeeListScreen} />
           
          
            <Route path="/add-course" component={AddCourseScreen} />
            <Route path="/subjectList" component={SubjectsListScreen} />
            <Route path="/addSubjects" component={AddSubjectScreen} />
            
            <Route path="/courses" component={ListCourseComponent} />
            <Route path="/viewSubjects" component={ListSubjectsComponent} />
            <Route path="/subjectsPage" component={SubjectsPage} />
            <Route path="/courses" component={ListCourseComponent} />
            <Route path="/viewSubjects" component={ListSubjectsComponent} />
            <Route path="/emp-courses" component={EmployeeCourseComponent} />
            <Route path="/emp-subjects" component={EmployeeSubjectsComponent} />
            <Route path="/Add-subjects" component={AddSubjectsInCourseComponent} />
            <Route path="/videos" component={VideosScreen} />
            <Route path="/jobs" component={JobsScreen} />
            <Route path="/add-test" component={AddTestComponent} />
            <Route path="/viewTest" component={GetTestComponent} />
            <Route path="/userTest" component={UserTestComponent} />
            <Route path="/addQuestions" component={AddQuestions} />
            <Route path="/paymentDetails" component={PaymentPage} />
            <Route path="/giveTest" component={GiveTest} />
            <Route path="/purchased" component={purchasedTest} />
            <Route path="/result" component={ResultComponent} />
            


          

          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
