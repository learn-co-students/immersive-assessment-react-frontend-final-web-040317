import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AccountContainer from '../containers/AccountContainer'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2><Link to="/transactions">The Royal Bank of Flatiron</Link></h2>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App
