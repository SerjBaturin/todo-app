import React from 'react'
import AddCathegorie from '../../components/AddCathegorie'
import DeleteAllData from '../../components/DeleteAllData'
import { connect } from 'react-redux'
import { showDataAction } from '../../redux/actions/showDataAction'

const Sidebar = props => (
  <div className="sidebar">
    <h1>Let's Todo</h1>
    <h2>Cathegories</h2>
    <AddCathegorie />
    {props.cathegories.map((item, i) => (
      <div
        className="cathegorie"
        key={i}
        onClick={() => props.onHandleClick(item)}
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
  onHandleClick: cathegorie => {
    dispatch(showDataAction(cathegorie))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
