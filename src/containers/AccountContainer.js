import React, { Component } from 'react'
import TransactionsList from '../components/TransactionsList'
import CategorySelector from '../components/CategorySelector'
import TransactionsAdapter from '../assets'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    TransactionsAdapter.all()
    .then(data => this.setState({
      transactions: data
    })
  )}

  handleChange(event) {
    this.setState({ activeCategory: event.target.value })
  }

  render() {
    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

        <TransactionsList
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
        />

      </div>
    )
  }
}

export default AccountContainer
