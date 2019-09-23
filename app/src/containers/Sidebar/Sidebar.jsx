import React from 'react'
import AddCathegorie from '../../components/AddCathegorie'
import DeleteAllData from '../../components/DeleteAllData'
import { connect } from 'react-redux'

const Sidebar = props => (
  <div className="sidebar">
    <h1>Todo App With React</h1>
    <h2>Categories</h2>
    <AddCathegorie />
    {props.cathegories.map((item, i) => (
      <div
        className="cathegorie"
        key={i}
        onClick={() => {
          props.onHandleClick(item)
        }}
      >
        {item}
      </div>
    ))}
    <DeleteAllData />
  </div>
)

const mapStateToProps = state => {
  return { cathegories: state.cathegories }
}

const mapDispatchToProps = dispatch => ({
  onHandleClick: item => {
    dispatch({ type: 'SHOW_HEADER', payload: item })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
