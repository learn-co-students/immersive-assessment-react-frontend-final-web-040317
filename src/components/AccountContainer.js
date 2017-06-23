import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  handleChange(event) {
    this.setState({
      activeCategory: event.target.name
    })
  }

  render() {
    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container color black">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={this.handleChange.bind(this)}
          color={this.props.color}
        />

        <TransactionsList
          transactions={ displayedTransactions }
          activeCategory={this.state.activeCategory}
          color={this.props.color}
        />

      </div>
    )
  }
}

export default AccountContainer
