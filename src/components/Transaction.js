import React from 'react'
import { Link } from 'react-router-dom'

const Transaction = (props) => {
  const { id, posted_at, description, category, amount } = props.transaction
  return (
    <tr key={id}>
      <td>{posted_at}</td>
      <td><Link to={`/transactions/${id}`}>{description}</Link></td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction
