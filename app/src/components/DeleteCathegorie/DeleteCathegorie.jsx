import React from 'react'
import { connect } from 'react-redux'
import { deleteCathegorieAction } from '../../redux/actions/deleteCathegorieAction'

const DeleteCathegorie = props => (
  <div className="delete-cathegorie">
    <button onClick={() => props.onHandleClick(props.cathegorie)}>
      Delete Cathegorie
    </button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  onHandleClick: cathegorie => {
    dispatch(deleteCathegorieAction(cathegorie))
    window.location.reload()
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(DeleteCathegorie)
