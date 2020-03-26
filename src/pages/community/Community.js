import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartIncrement } from '../../actions'

function Community() {
  const cartNumbers = useSelector(state => state.cartnumbers)
  const dispatch = useDispatch()

  return (
    <article className="content container">
      Community
      <h3>{cartNumbers}</h3>
      <button onClick={dispatch(cartIncrement())}>click</button>
    </article>
  )
}

export default Community
