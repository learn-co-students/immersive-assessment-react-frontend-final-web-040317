import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>
        <div className={"ui segment " + props.color + " inverted"}>{props.transaction.posted_at}
        </div>
      </td>
      <td className={props.color + " text"}>
        <div className={"ui segment " + props.color + " inverted"}>{props.transaction.description}
        </div>
      </td>
      <td className={props.color + " text"}>
        <div className={"ui segment " + props.color + " inverted"}>{props.transaction.category}
        </div>
      </td>
      <td className={props.color + " text"}>
        <div className={"ui segment " + props.color + " inverted"}>
        {props.transaction.amount}
        </div>
      </td>
    </tr>
  )
}

export default Transaction
