import React from 'react'

const CategoryField = (props) => {
  const { category, checked }  = props

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">
        <div onChange={props.onChange}>
        <input
          type="radio"
          name="category"
          checked={ checked }
        />
        <label>{ category }</label>
        </div>
      </div>
    </div>
  )
}

export default CategoryField
