import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../../components/AddTodo'

class TodoHeader extends Component {

  render() {
    const  todoCathegorie  = this.props.todoCathegorie
    return (
      <Fragment>
      <div className="todo-header">
        <h1>{todoCathegorie}</h1>
        <AddTodo todoCathegorie={todoCathegorie} />
      </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoCathegorie: state.todoCathegorie,
  }
}

export default connect(mapStateToProps)(TodoHeader)
