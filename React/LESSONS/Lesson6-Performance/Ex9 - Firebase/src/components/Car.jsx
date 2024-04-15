import React from 'react'
import { useDispatch } from 'react-redux'
export default function Car({car}) {
    const dispatch = useDispatch()
  return (
    <div style={{
        border: "3px solid red",
        width: "200px",
        padding: "10px",
        margin: "0 0 10px"
    }}>

        <strong>{car.id}</strong> <br />
    <strong>Model:</strong> {car.model} <br />
    <strong>Year:</strong> {car.year} <br />
    <strong>Color:</strong> {car.color} <br />
   
    <button onClick={() => dispatch({type: "REMOVE", payload: car.id})}>Remove</button>

    </div>
  )
}
