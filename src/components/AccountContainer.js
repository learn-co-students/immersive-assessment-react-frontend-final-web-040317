import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [
        {
        }
      ],
      activeCategory: "All"
    }
    this.handleChange = this.handleChange.bind(this)
    this.filteredTransactions = this.filteredTransactions.bind(this)
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
        .then(res => this.setState({ transactions: res }))
  }

  handleChange(event) {
    this.setState({
      activeCategory: event.target.name
    })
  }

  filteredTransactions(){
    let activeCategory = this.state.activeCategory
    let transactions = this.state.transactions

    if(activeCategory === 'All') {
      return transactions
    } else {
      return transactions.filter(transaction => transaction.category === activeCategory)
    }
  }

  render() {

    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

        <TransactionsList
          transactions={ this.filteredTransactions() }
        />

      </div>
    )
  }
}

export default AccountContainer
