import React, { Component } from 'react';
import {  Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

//Auth
import SignIn from './../component/auth/SignIn'
import SignUp from './../component/auth/SignUp'
//Layout
import TopNav from './../component/layout/TopNav'
import SideNav from './../component/layout/SideNav'
import PagesInfo from './../component/layout/PagesInfo'
//Content
import Main from './../component/content/Main'
import Dashboard from './../component/content/Dashboard/'
import Kanban from './../component/content/Kanban/'
import Requests from './../component/content/Requests/'

import HRMenu from './../component/content/HRMenu'
import JobOpenings from './../component/content/HRMenu/JobOpenings'
import Candidates from './../component/content/HRMenu/Candidates'
import Interviews from './../component/content/HRMenu/Interviews'
import Task from './../component/content/HRMenu/Task'
//Submission
  //Permisiion
  import Permission from './../component/content/Submission/Permission'

//Admin Content
import DataEmployee from './../component/content/DataEmployee/'
import RequestsRecord from './../component/content/Requests/DownloadRecord/'
import DataUsers from './../component/content/DataUsers/'
//Sample
import SampleDatatable from './../component/content/DataEmployee/'
import ReactBootstrapTable from './../component/content/SampleDocument/'
//Style

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';  
import { faCaretSquareDown, faWindowClose, faUserCog, faSearch, faEnvelope, faCircleNotch, faUser, faUserTag, faQuestionCircle, faTrash, faEye, faEyeSlash, faEdit, faFileExcel,faBars, faTachometerAlt, faAngleRight, faBookOpen, faBookReader,faPowerOff } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretSquareDown, faWindowClose, faUserCog, faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram, faSearch, faEnvelope, faCircleNotch, faUser, faUserTag, faQuestionCircle, faTrash, faEye, faEyeSlash, faEdit, faFileExcel,faBars, faTachometerAlt, faAngleRight, faBookOpen, faBookReader,faPowerOff)

class Routes extends Component {
  render() {
    const { dataRoutes } = this.props
    const config = {
      viewTopnav: dataRoutes.firebase.auth.uid != null ? <TopNav dataRoutes={dataRoutes}/> : null,
      viewSidenav: dataRoutes.firebase.auth.uid != null ? <SideNav dataRoutes={dataRoutes}/> : null,
      viewPagesInfo: dataRoutes.firebase.auth.uid != null ? <PagesInfo dataRoutes={dataRoutes}/> : null,
      contentClass: dataRoutes.firebase.auth.uid != null ? 'Content' : 'Content-Auth'
    }
    return(
      <Router>
        <div className="App">
          {config.viewTopnav}
          {config.viewSidenav}
          {config.viewPagesInfo}
          <div className={config.contentClass}>
            <Switch>
              <Route path='/' render={(routeProps) => (<Dashboard {...routeProps} dataRoutes={dataRoutes}/> )} exact/>  
              <Route path='/main' component={Main} />
              <Route path='/signin' render={(routeProps) => (<SignIn {...routeProps} dataRoutes={dataRoutes}/> )} />  
              <Route path='/signup' render={(routeProps) => (<SignUp {...routeProps} dataRoutes={dataRoutes}/> )} /> 
              <Route path='/dataemployee' render={(routeProps) => (<DataEmployee {...routeProps} dataRoutes={dataRoutes}/> )} />  
              <Route path='/kanban' render={(routeProps) => (<Kanban {...routeProps} dataRoutes={dataRoutes}/> )} />  
              <Route path='/requests' render={(routeProps) => (<Requests {...routeProps} dataRoutes={dataRoutes}/> )} />  
              <Route path='/downloadrequests' render={(routeProps) => (<RequestsRecord {...routeProps} dataRoutes={dataRoutes}/> )} /> 
              <Route path='/datausers' render={(routeProps) => (<DataUsers {...routeProps} dataRoutes={dataRoutes}/> )} />  
              
              <Route path='/hrdashboard' render={(routeProps) => (<HRMenu {...routeProps} dataRoutes={dataRoutes}/> )} />
              <Route path='/jobsopening' render={(routeProps) => (<JobOpenings {...routeProps} dataRoutes={dataRoutes}/> )} />  
              <Route path='/candidates' render={(routeProps) => (<Candidates {...routeProps} dataRoutes={dataRoutes}/> )} />
              <Route path='/interviews' render={(routeProps) => (<Interviews {...routeProps} dataRoutes={dataRoutes}/> )} />  
              <Route path='/task' render={(routeProps) => (<Task {...routeProps} dataRoutes={dataRoutes}/> )} /> 
              <Route path='/permission' component={Permission} />
              <Route path='/sampletable' component={SampleDatatable} />
              <Route path='/reactbootstraptable' component={ReactBootstrapTable} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    dataRoutes: state
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        [
          {
            collection: 'kanban', orderBy: ['createdAt', 'desc']
          },
          {
            collection: 'information', orderBy: ['createdAt', 'desc']
          },
          {
            collection: 'requests', orderBy: ['createdAt', 'desc']
          },
          {
            collection: 'employees',
          },
          {
            collection: 'users'
          },
          {
            collection: 'JobOpenings'
          },
          {
            collection: 'Candidates'
          },
          {
            collection: 'Interviews'
          },
          {
            collection: 'Task'
          }
        ]
    )
  )(Routes);
