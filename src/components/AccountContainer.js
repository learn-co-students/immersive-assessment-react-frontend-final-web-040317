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
    this.getTransactions = this.getTransactions.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.getTransactions()
  }

  getTransactions(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then( res => res.json() )
      .then( transactions => this.setState({
        transactions: transactions
      })
    )
  }

  handleChange(e) {
    this.setState({
      activeCategory: e.target.name
    })
  }



  render() {
    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

      <TransactionsList filterTerm={this.state.activeCategory}
          transactions={ displayedTransactions }
        />

      </div>
    )
  }
}

export default AccountContainer
