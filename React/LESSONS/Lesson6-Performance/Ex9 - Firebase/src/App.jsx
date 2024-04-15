import { useDispatch } from "react-redux"
import db from "./firebase.js"
import { query, collection, onSnapshot } from "firebase/firestore"
import { useEffect } from "react"
import Cars from "./components/Cars.jsx"
import AddCar from "./components/AddCar.jsx"
function App() {


  const dispatch = useDispatch()


  const fetchData = async () => {
    const q = query(collection(db, 'Cars'))

    onSnapshot(q, (snapshot) => {
      console.log("on snapshot")
      const cars = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data(), status: "UNCHANGED" }
      })
      console.log(cars)
      const action = { type: "LOAD", payload: cars }
      dispatch(action)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Cars />

      <AddCar />


    </>
  )
}

export default App
