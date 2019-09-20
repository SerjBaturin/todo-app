import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoHeader extends Component {

  render() {
    const  todoCathegorie  = this.props.todoCathegorie
    return (
      <div className="todo-header">
        <h1>{todoCathegorie}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoCathegorie: state.todoCathegorie,
  }
}

export default connect(mapStateToProps)(TodoHeader)
