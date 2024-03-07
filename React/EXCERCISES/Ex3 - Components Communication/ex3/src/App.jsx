import { useState } from "react";

import Child from "./components/child";
import Parent from "./components/parent";

const App = () => {
  const [namesList, setNamesList] = useState([]);

  const submitHandler = (newName) => {
    setNamesList((latestList) => {
      return [...latestList, newName];
    });
  };

  return (
    <>
      <Parent names={namesList}></Parent>
      <Child onSubmit={submitHandler}></Child>
    </>
  );
};

export default App;
