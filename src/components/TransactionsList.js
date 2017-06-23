import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  if (props.activeCategory === "All") {
    var filteredList = props.transactions
  } else {
    var filteredList = props.transactions.filter((transaction) => transaction.category === props.activeCategory)
  }



  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {filteredList.map(transaction => <Transaction transaction={transaction}/>)}

      </tbody>
    </table>
  )
}

export default TransactionsList
