import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../../components/AddTodo'

const TodoHeader = props => {
  const todoCathegorie = props.todoCathegorie
  return (
    <div className="todo-header">
      <h2>{todoCathegorie}</h2>
      <AddTodo todoCathegorie={todoCathegorie} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todoCathegorie: state.todoCathegorie,
  }
}

export default connect(mapStateToProps)(TodoHeader)
