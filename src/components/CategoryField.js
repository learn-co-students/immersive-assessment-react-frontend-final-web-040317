import React from 'react'

class CategoryField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosen: this.props.category
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ chosen: e.target.name})
    this.props.handleChange(this.state.chosen)
  }
  render() {
    return (
      <div className=" four wide field">
        <div className="ui radio checkbox">

          <input
            type="radio"
            name="category"
            checked={ this.props.checked }
            onChange={ this.handleChange }

            />
          <label>{ this.props.category }</label>

        </div>
      </div>
    )
  }
}

export default CategoryField
