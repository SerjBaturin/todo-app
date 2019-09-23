import React, { Component } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'

class AddTodo extends Component {
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
    const cathegorie = this.props.todoCathegorie
    const todo = this.state.inputText

    this.props.onHandleClick(cathegorie, todo)

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
            placeholder="add todo"
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" value="add" />
        </form>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onHandleClick: (cathegorie, todo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        cathegorie,
        todo,
      },
    })
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo)
