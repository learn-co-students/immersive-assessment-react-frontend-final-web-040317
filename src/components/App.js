import React, { Component } from 'react'
import AccountContainer from './AccountContainer'


class App extends Component {
  constructor(){
    super()
    this.state = {
      color: "",
      colors: ["black", "blue", "green", "orange", "pink", "purple", "red", "teal", "yellow"]
    }
    this.changeColors = this.changeColors.bind(this)
  }


  changeColors() {
    let index = Math.floor(Math.random() * this.state.colors.length)
    console.log(index)
    this.setState({
      color: this.state.colors[index]
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.changeColors, 75)
  }

  render() {
    return (
      <div className="ui raised segment black inverted">
        <div className={"ui center aligned segment " + this.state.color + " inverted"}>

          <h2>The Groovy Bank of Royal Funk</h2>
        </div>

        <AccountContainer color={this.state.color}/>

      </div>
    )
  }
}

export default App
