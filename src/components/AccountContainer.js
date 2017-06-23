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

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    let activeCategory = event.target.value
    this.setState({
      activeCategory
    })
  }


  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions
      })
    })
  }

  filterList(){
    let filtered;
    if (this.state.activeCategory === 'All'){
      filtered = this.state.transactions
    } else {
      filtered = this.state.transactions.filter(transaction => {
        if (transaction.category === this.state.activeCategory){
          return transaction
        }
      })
    }
    return filtered
  }

  render() {
    const filtered = this.filterList()
    const displayedTransactions = filtered

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
