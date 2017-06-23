import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({ transactions, checked }) => {

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

        {transactions.map((t, idx) => {
          if (checked === 'All') {
            return <Transaction key={idx}transaction={t} />
          } else if (t.category === checked){
            return <Transaction key={idx} transaction={t} />
          }
          return null
        })}

      </tbody>
    </table>
  )
}

export default TransactionsList
