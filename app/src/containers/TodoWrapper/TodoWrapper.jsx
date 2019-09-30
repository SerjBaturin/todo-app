import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../../components/AddTodo'
import DeleteCathegorie from '../../components/DeleteCathegorie'
import DeleteTodo from '../../components/DeleteTodo'

class TodoWrapper extends Component {
  render() {
    const { cathegorie, todos } = this.props.showData
    return (
      <div className="todo-wrapper">
        <h2>{cathegorie}</h2>
        <AddTodo cathegorie={cathegorie} />
        <ul className="todo-list">
          {todos &&
            todos
              .slice(0, -1)
              .split('|')
              .map((item, i) => (
                <li className="todo-list-item" key={i}>
                  {item}
                  <DeleteTodo cathegorie={cathegorie} todo={item} />
                </li>
              ))}
        </ul>
        <DeleteCathegorie cathegorie={cathegorie} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showData: state.showData,
  }
}

export default connect(mapStateToProps)(TodoWrapper)
