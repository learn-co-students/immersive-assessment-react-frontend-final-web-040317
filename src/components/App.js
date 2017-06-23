import React, { Component } from 'react'
import AccountContainer from './AccountContainer'


class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>Money Mart</h2>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App
