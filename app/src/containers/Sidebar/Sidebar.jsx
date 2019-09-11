import React, { useState } from 'react'
import AddBtn from '../../components/AddButton'

const Sidebar = () => {
  const categories = useState(Object.keys(localStorage))
  return (
    <div className="sidebar">
      <h1>Todo App With React</h1>
      <h2>Categories</h2>
      <AddBtn />
      {categories[0].map((item, i) => (
        <div className="categorie" key={i}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
