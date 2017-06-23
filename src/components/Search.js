import React from 'react'

export default function Search(props) {
  return (
    <div className=" ui left icon input loading">
      <input type="text" placeholder="Search Descriptions" value={props.searchTerm} onChange={props.handleChange}/>
      <i className="search icon"></i>
    </div>
  )
}
