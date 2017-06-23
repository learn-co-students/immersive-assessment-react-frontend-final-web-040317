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
    this.displayedTransactions=this.displayedTransactions.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(res => this.setState({
      transactions: res
    }))
  }

  handleChange(event) {
    this.setState({
      activeCategory: event.target.value
    })
  }


  filtersActiveCategory() {
    let filtered = this.state.transactions.filter(transaction => transaction.category.includes(this.state.activeCategory))

    return this.state.activeCategory=== "All" ? this.state.transactions : filtered
  }

  render() {


    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={this.handleChange}
        />

        <TransactionsList
          transactions={ this.filtersActiveCategory() }
        />

      </div>
    )
  }
}

export default AccountContainer
