import React, { Component } from 'react'
import AddBtn from '../../components/AddButton'
import { connect } from 'react-redux'

class Sidebar extends Component {
  state = {
    categories: this.props.categories,
  }

  render() {
    const { categories } = this.state
    return (
      <div className="sidebar">
        <h1>Todo App With React</h1>
        <h2>Categories</h2>
        <AddBtn />
        {categories.map((item, i) => (
          <div
            className="categorie"
            key={i}
            onClick={() => {
              this.props.onHandleClick(item)
            }}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories }
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
