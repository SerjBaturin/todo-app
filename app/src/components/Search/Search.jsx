import React, { Component } from 'react'
import { Fragment } from 'react'

class Search extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <input type="text" placeholder="todo search" />
        </form>
      </Fragment>
    )
  }
}

export default Search
