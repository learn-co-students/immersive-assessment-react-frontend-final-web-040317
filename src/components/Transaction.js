import React from 'react'

const Transaction = (props) => {
  let check
  if (props.item.amount < 0){
    check = "negative"
  }
  else {
    check = "positive"
  }

  return (
    <tr key={props.item.id} className={check}>
      <td>{props.item.posted_at}</td>
      <td>{props.item.description}</td>
      <td>{props.item.category}</td>
      <td>{props.item.amount}</td>
      <td>{props.total[0][props.item.id - 1]}</td>
    </tr>
  )
}

export default Transaction
