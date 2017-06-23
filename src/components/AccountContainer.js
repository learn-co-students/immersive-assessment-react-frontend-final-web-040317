import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import { AccountAdapter } from '../adapters'
import TotalsDisplay from './TotalsDisplay'


class AccountContainer extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.filteredTransactions = this.filteredTransactions.bind(this)
    this.transactionsTotal = this.transactionsTotal.bind(this)

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

  transactionsTotal(transactions){
    let temp = transactions.map(t => t.amount)
    return temp.reduce(function(t, val){
      return t + val
    }, 0)
  }

  render() {
    const displayedTransactions = this.filteredTransactions(this.state.activeCategory, this.state.transactions)

    return (
      <div className="ui grid container">

        <TotalsDisplay total={this.transactionsTotal(displayedTransactions)}/>

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
