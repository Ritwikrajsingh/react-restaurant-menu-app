import React from 'react'
import './index.css'

export default function Categories(props) {
    const { items, filterItems } = props
    const categories = ["all", ...new Set(items.map(item => item.category))];

    return (
        <div className="btn-container">
            {categories.map(category => <button key={category} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>)}
        </div>
    )
}