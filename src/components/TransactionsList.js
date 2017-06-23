import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  let filteredTransactions = props.transactions.map(transaction => {
    if (props.activeCategory === transaction.category || props.activeCategory === "All") {
      return <Transaction key={transaction.id} transaction={transaction} color={props.color} />
    }
  })

  return (
    <table className="ui celled striped padded table black inverted">
      <tbody className="ui segment black inverted">
        <tr>
          <th>
            <h3 className={"ui center aligned header " + props.color + " text"}>
              Posted At
            </h3>
          </th>
          <th>
            <h3 className={"ui center aligned header " + props.color + " text"}>
              Description
            </h3>
          </th>
          <th>
            <h3 className={"ui center aligned header " + props.color + " text"}>
              Category
            </h3>
          </th>
          <th>
            <h3 className={"ui center aligned header " + props.color + " text"}>
              Amount
            </h3>
          </th>
        </tr>

        {filteredTransactions}

      </tbody>
    </table>
  )
}

export default TransactionsList
