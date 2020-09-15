import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import CvEditor from './routes/Editor';
import Login from 'routes/Login'
import Register from 'routes/Register'
import Cv from 'routes/Cv'
import { UserContext } from 'context/user'
import { ExperienceContext } from 'context/experience'
import { SkillContext } from 'context/skill'
import { EducationContext } from 'context/education'
import { isLogin } from 'utils'
import Header from 'components/Header/Header'
import Home from 'routes/Home'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

const App = () => {
    return (
        <Router>
            <Switch>
                <Header>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <UserContext>
                        <ExperienceContext>
                            <EducationContext>
                                <SkillContext>
                                    <PrivateRoute path="/cv" exact={true} component={Cv}/>
                                    <PrivateRoute path="/cv/edit/:id" component={CvEditor} />
                                </SkillContext>
                            </EducationContext>
                        </ExperienceContext>
                    </UserContext>
                </Header>
            </Switch>
        </Router>
    );
}


export default App;