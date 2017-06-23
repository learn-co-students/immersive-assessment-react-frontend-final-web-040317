import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import { AccountAdapter } from '../adapters'


class AccountContainer extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.filteredTransactions = this.filteredTransactions.bind(this)

    this.state = {
      transactions: [],
      activeCategory: "All"
    }
  }

  handleChange(e) {
    this.setState({
      activeCategory: e.target.name
    })
  }

  componentDidMount() {
    AccountAdapter.all()
    .then(transactions => this.setState({ transactions }))
  }

  filteredTransactions(filter, transactions){
    if (filter === "All"){
      return transactions
    } else {
      return transactions.filter(t => t.category === filter)
    }
  }

  render() {
    const displayedTransactions = this.filteredTransactions(this.state.activeCategory, this.state.transactions)

    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

        <TransactionsList
          transactions={ displayedTransactions }
        />

      </div>
    )
  }
}

export default AccountContainer
