import React, { Component } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'

class AddCathegorie extends Component {
  state = {
    inputText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onHandleSubmit(this.state.inputText)
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
            maxLength="20"
            required
          />
          <input type="submit" value="add" />
        </form>
        <span className="max-length">max: 20 characters</span>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onHandleSubmit: item => {
    dispatch({ type: 'ADD_CATHEGORIE', payload: item })
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(AddCathegorie)
