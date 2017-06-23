import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

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
    this.filterTransactions = this.filterTransactions.bind(this)
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

  filterTransactions(){
    const displayedTransactions = this.state.transactions
    return displayedTransactions.filter(x => (
      ( x.category.match( this.state.activeCategory ) ||
        this.state.activeCategory === "All" )
        &&
      ( x.description.toLowerCase().match( this.state.searchTerm.toLowerCase() ) )
    ))
  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/transactions" render={() => (
            <div className="ui grid container">

              <Search searchTerm={ this.state.searchTerm } handleChange={ this.handleSearchChange }/>

              <CategorySelector
                activeCategory={ this.state.activeCategory }
                handleChange={ this.handleCategoryChange }
              />

              <TransactionsList
                transactions={ this.filterTransactions() }
                // filterTransactions={ this.filterTransactions }
                // activeCategory={ this.state.activeCategory }
                // searchTerm={ this.state.searchTerm }
              />

            </div>
          )} />
          <Route exact path='/transactions/:id' render={(routerProps) => {
            const id = routerProps.match.params.id
            const transaction = this.state.transactions.find(t => t.id === parseInt(id, 10) )
            return <TransactionsList transactions={ [transaction] } />
          }} />
        </Switch>
      </div>
    )
  }
}

export default AccountContainer
