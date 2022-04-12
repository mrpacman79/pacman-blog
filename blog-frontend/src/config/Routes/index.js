import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route, Link} from 'react-router-dom'
import { Home, Login, Register } from '../../pages'

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home/>} />
        </Switch>
    </Router>
  )
}

export default Routes