import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
function App() {
  return (
      <div>
        <Router>
        
          <Switch>
            <Route path='/'></Route>
          </Switch>
        </Router>
  
      </div>
    
  )
}

export default App
