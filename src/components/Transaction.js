import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.trans.posted_at}</td>
      <td>{props.trans.description}</td>
      <td>{props.trans.category}</td>
      <td>{props.trans.amount}</td>
    </tr>
  )
}

//           posted_at: "2017-05-24 08:52:00",
          // description: "Medium Iced Cold Brew, Gregory's Coffee",
          // category: "Food",
          // amount: -365

export default Transaction
