import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = (props) => {
  const { loggedIn, firstName, lastName, job, age, slug } = props
  const link = loggedIn ? `/login/${slug}` : `/user/${slug}`;

  return (
    <li>
      <article className="user">
        <Link
          className="postInPostlist"
          to={{ pathname: link }}
          style={{ textDecoration: 'underline' }}
        >
          <h2>{firstName} {lastName}</h2>
        </Link>

        <h3>{job}</h3>
        <h3 style={{ opacity: .8}}>Age: {age}</h3>
      </article>
    </li>
  )
}

export default UserItem
