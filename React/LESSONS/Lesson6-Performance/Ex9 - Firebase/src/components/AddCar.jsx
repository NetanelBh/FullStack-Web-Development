import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function AddCar() {
    const [newCar, setNewCar] = useState({})

    const dispatch = useDispatch()

    return (
        <div>

            Model: <input onChange={e => setNewCar({ ...newCar, model: e.target.value })} type="text" /> <br />
            Year: <input onChange={e => setNewCar({ ...newCar, year: +e.target.value })} type="number" /> <br />
            Color: <input onChange={e => setNewCar({ ...newCar, color: e.target.value })} type="text" /> <br />
            <button onClick={() => dispatch({type: "ADD", payload: {...newCar, status: "NEW"}})}>Add</button>


        </div>
    )
}
