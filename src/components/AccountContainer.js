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
    this.filteredTransactions = this.filteredTransactions.bind(this)
  }


  componentDidMount(){
   fetch('https://boiling-brook-94902.herokuapp.com/transactions')
  .then( res => res.json() )
  .then( data => this.setState({ transactions: data}) )
}

  handleChange(e) {
    this.setState({
      activeCategory: e.currentTarget.textContent
    })
  }

  filteredTransactions () {
    if (this.state.activeCategory !== "All"){
    this.state.transactions.filter(function(trans){
      return trans.category === this.state.activeCategory
    })
  } else{
    return this.state.transactions
  }
}


  render() {
    const displayedTransactions = filteredTransactions
    return (
      <div className="ui grid container">

        <CategorySelector
          transactions={ displayedTransactions }
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

        <TransactionsList
          category = {this.state.activeCategory}
          transactions={ this.filteredTransactions}
        />

      </div>
    )
  }
}

export default AccountContainer
