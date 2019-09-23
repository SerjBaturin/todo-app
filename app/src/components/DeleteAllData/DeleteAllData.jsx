import React from 'react'
import { connect } from 'react-redux'

const DeleteAllData = props => (
  <div className="delete-all-data">
    <button onClick={props.onHandleClick}>Delete All Data</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  onHandleClick: () => {
    dispatch({ type: 'DELETE_ALL_DATA' })
    window.location.reload()
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(DeleteAllData)
