import { useSelector } from "react-redux"
import Car from "./Car"
import db from "../firebase"
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
export default function Cars() {

    const cars = useSelector((store) => store.cars)


    const saveChanges = () => {
        cars.forEach(car => {
            switch (car.status) {
                case "NEW":
                    const obj = { model: car.model, year: car.year, color: car.color }
                    addDoc(collection(db, "Cars"), obj)
                    alert("Added to firebase")
                    break;
                case "DELETED":
                    deleteDoc(doc(db, "Cars", car.id))
                    alert("Deleted from firebase")
                
                default: 
                    break;

            }
        })
    }


    return (
        <div style={{ border: "2px solid black" }}>

            {cars.filter((car) => car.status !== "DELETED").map((car) => {
                return <Car car={car} />
            })}

            <button onClick={saveChanges}>Save Changes</button>

        </div>
    )
}
