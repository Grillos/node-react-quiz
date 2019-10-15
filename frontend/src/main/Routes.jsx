import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import QuizCrud from '../components/quiz/QuizCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/quizes' component={QuizCrud} />
        <Redirect from='*' to='/' />
    </Switch>