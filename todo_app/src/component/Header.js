import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <ul className="nav nav-pills">
    <li className="nav-item">
      {/* 注意這裡要用exact，不然首頁選單項目的active css會不正常  */}
      <NavLink exact className="nav-link" activeClassName="active" to="/">
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/student">
        Student
      </NavLink>
    </li>
  </ul>
)

export default Header
