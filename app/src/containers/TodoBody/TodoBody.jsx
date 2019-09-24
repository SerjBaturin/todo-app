import React from 'react'
import { connect } from 'react-redux'

const TodoBody = props => {
  let todoList = localStorage.getItem(props.todoCathegorie)
  return (
    <div className="todo-body">
      <ul>
        {todoList &&
          todoList
            .slice(0, -1)
            .split('|')
            .map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todoCathegorie: state.todoCathegorie,
  }
}

export default connect(mapStateToProps)(TodoBody)
