import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import QuizCrud from '../components/quiz/QuizCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/quizes' component={QuizCrud} />
        <Redirect from='*' to='/' />
    </Switch>