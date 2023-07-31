import React, { useState } from 'react'
import Menu from '../Menu'
import Categories from '../Categories'
import items from '../../database/data'

export default function App() {
  const [menuItems, setMenuItems] = useState(items)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const filteredItems = items.filter(item => item.category === category)
    setMenuItems(filteredItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories items={items} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}