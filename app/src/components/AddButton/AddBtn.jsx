import React, { Component } from 'react'
import { Fragment } from 'react'

class AddBtn extends Component {
  state = {
    inputText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    })
  }

  handleSubmit = () => {
    localStorage.setItem(this.state.inputText, new Date())
    this.setState({
      inputText: '',
    })
  }

  render() {
    const { inputText } = this.state
    return (
      <Fragment>
        <form className="add-btn" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputText}
            placeholder="add category"
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" value="add" />
        </form>
      </Fragment>
    )
  }
}

export default AddBtn
