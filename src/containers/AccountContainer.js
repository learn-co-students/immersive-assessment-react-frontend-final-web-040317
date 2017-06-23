import React, { Component } from 'react'
import TransactionsList from '../components/TransactionsList'
import CategorySelector from '../components/CategorySelector'
import Search from '../components/Search'
import TransactionsAdapter from '../assets'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All",
      searchTerm: ""
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  componentDidMount() {
    TransactionsAdapter.all()
    .then(data => this.setState({
      transactions: data
    })
  )}

  handleCategoryChange(event) {
    this.setState({ activeCategory: event.target.value })
  }

  handleSearchChange(event) {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container">

        <Search searchTerm={ this.state.searchTerm} handleChange={ this.handleSearchChange }/>

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleCategoryChange }
        />

        <TransactionsList
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          searchTerm={ this.state.searchTerm }
        />

      </div>
    )
  }
}

export default AccountContainer
