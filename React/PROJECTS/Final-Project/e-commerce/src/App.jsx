import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useEffect, useCallback, useState, Children } from "react";
import { usersActions } from "./components/store/usersSlice";

import db from "./components/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

import PacmanLoading from "./components/UI/PacmanLoading";
import CreateRouter from "./components/utils/createRouter";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // Create the router from utils dir
  const router = CreateRouter();

  const fetchUsers = useCallback(() => {
    setIsLoading(true);

    const q = query(collection(db, "users"));
    // With snapshot we can communicate with firebase(realtime update when change)
    onSnapshot(q, (snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      dispatch(usersActions.loadUsers(users));

      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      {isLoading && <PacmanLoading color="black" />}
      {!isLoading && <RouterProvider router={router} />}
    </>
  );
};

export default App;
