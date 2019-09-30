import React from 'react'
import { connect } from 'react-redux'
import { deleteTodoAction } from '../../redux/actions/deleteTodoAction'
import { showDataAction } from '../../redux/actions/showDataAction'

const DeleteTodo = props => {
  const todo = props.todo
  const cathegorie = props.cathegorie
  return (
    <div
      className="delete-todo-btn"
      onClick={() => props.onHandleClick(cathegorie, todo)}
    ></div>
  )
}

const mapDispatchToProps = dispatch => ({
  onHandleClick: (cathegorie, todo) => {
    dispatch(deleteTodoAction(cathegorie, todo))
    dispatch(showDataAction(cathegorie))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(DeleteTodo)
