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


  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then( res => res.json() )
      .then( data => this.setState({ transactions: data}) )
  }

  handleChange(event) {
    this.setState({
      activeCategory: event.target.name
    })
  }



  render() {
    let displayedTransactions = this.state.transactions.filter( T => T.category === this.state.activeCategory)
   
    if(displayedTransactions.length === 0)
    {
      displayedTransactions = this.state.transactions
    }
    

    return (
      <div className="ui grid container">

        <CategorySelector
          activeCategory={ this.state.activeCategory }
          handleChange={ this.handleChange }
        />

        <TransactionsList
          transactions={ displayedTransactions  }
        />

      </div>
    )
  }
}

export default AccountContainer
