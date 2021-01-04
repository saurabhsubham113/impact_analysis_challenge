import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Candidate from './components/candidates/Candidate'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/:id" exact component={Candidate} />
            </Switch>
        </Router>
    )
}




