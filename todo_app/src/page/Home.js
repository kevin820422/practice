import React from 'react'
import { Link } from 'react-router-dom'
import { data } from './../db/data'
const Home = () => (
  <>
    <h1>學生列表頁面</h1>
    <div className="list-group">
      {data.map(item => (
        <Link
          key={item.id}
          className="list-group-item list-group-item-action"
          to={'/student/' + item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </>
)

export default Home
