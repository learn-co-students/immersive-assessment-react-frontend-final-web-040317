import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import Search from './Search'


class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      activeCategory: "All",
      searchTerm: ""
    }
    this.getTransactions = this.getTransactions.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
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

  handleSearchChange(e){
    this.setState({
      searchTerm: e.target.value
    })
    console.log(this.state.searchTerm)
  }



  render() {
    const displayedTransactions = this.state.transactions

    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />
      <Search searchTerm={this.state.searchTerm} handleChange={this.handleSearchChange} />

      <TransactionsList searchTerm={this.state.searchTerm} filterTerm={this.state.activeCategory}
          transactions={ displayedTransactions }
        />

      </div>
    )
  }
}

export default AccountContainer
