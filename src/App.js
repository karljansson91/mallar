import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CvEditor from 'routes/Editor';
import Login from 'routes/Login'
import Register from 'routes/Register'
import Cv from 'routes/Cv'
import { UserContext } from 'context/user'
import { ExperienceContext } from 'context/experience'
import { SkillContext } from 'context/skill'
import { EducationContext } from 'context/education'

const App = () => {
    return (
        <Router>
            <Switch>
                    <Route path="/" exact={true}>
                        <div>hello done</div>
                    </Route>
                    <Route path="/cv" exact={true}>
                        <Cv />
                    </Route>
                    <Route path="/login" component={Login}/>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <UserContext>
                        <ExperienceContext>
                            <EducationContext>
                                <SkillContext>
                                    <Route path="/cv/edit/:id" component={CvEditor} />
                                </SkillContext>
                            </EducationContext>
                        </ExperienceContext>
                    </UserContext>
            </Switch>
        </Router>
    );
}


export default App;