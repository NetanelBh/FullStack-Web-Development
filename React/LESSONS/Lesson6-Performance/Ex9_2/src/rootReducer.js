const initialState = {
    cars: [],

}

import { v4 as uuid } from "uuid"

function carsReducer(state = initialState, action) {

    switch (action.type) {
        case "LOAD":
            return { ...state, cars: action.payload }

        case "ADD":
            return { ...state, cars: [...state.cars, { id: uuid(), ...action.payload }] }


        case "REMOVE":
            const id = action.payload
            const carsCopy = [...state.cars]

            const index = carsCopy.findIndex(car => car.id === id)
            console.log(index)
            if (index === -1) return state

            if (carsCopy[index].status === "UNCHANGED") {
                carsCopy[index].status = "DELETED"
            } else {
                carsCopy.splice(index, 1)
            }


            return { ...state, cars: carsCopy }


        default:
            return state
    }


}

export default carsReducer