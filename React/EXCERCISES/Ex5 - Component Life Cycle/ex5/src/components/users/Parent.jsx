import styles from "./Parent.module.css";

import { useState } from "react";

import Child from "./Child";
import ParentForm from "./ParentForm";

const Parent = () => {
  const [id, setId] = useState();

  const submitHandler = (userId) => {
    setId(userId);
  }

  return (
    <>
      <h1>Parent Comp</h1>
      <ParentForm onSubmit={submitHandler}/>
      {id && <Child id={id}/>}
    </>
  );
};

export default Parent;
