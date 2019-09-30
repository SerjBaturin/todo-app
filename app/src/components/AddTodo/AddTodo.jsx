import React, { Component } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import {addTodoAction} from '../../redux/actions/addTodoAction'
import {showDataAction} from '../../redux/actions/showDataAction'

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
    const cathegorie = this.props.cathegorie
    const todo = this.state.inputText
    this.props.onHandleSubmit(cathegorie, todo)
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
            maxLength="100"
            required
          />
          <input type="submit" value="add" />
        </form>
        <span className="max-length">max: 100 characters</span>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onHandleSubmit: (cathegorie, todo) => {
    dispatch(addTodoAction(cathegorie, todo))
    dispatch(showDataAction(cathegorie))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo)
