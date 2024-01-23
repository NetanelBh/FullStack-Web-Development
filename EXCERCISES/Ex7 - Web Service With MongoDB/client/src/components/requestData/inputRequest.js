import { useRef } from "react";
import styles from "./inputRequest.module.css";

const InputRequest = ({ reqType, onHttpSubmit }) => {
  const urlRef = useRef();
  const dataRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const url = urlRef.current.value;
    let data = undefined;
    let headers = {};
    if (dataRef.current) {
      // The string got from the browser as string
      data = dataRef.current.value;
      // Convert the data string to object
      data = JSON.parse(data);
      headers = {
        "Content-Type": "application/json"
      };
    }

    const configuration = {
      method: reqType,
      headers: headers,
      body: data
    };

    onHttpSubmit(url, configuration);
  };

  let dataToShow = null;
  if (reqType !== "GET" && reqType !== "DELETE") {
    dataToShow = (
      <>
        <div className={styles.data}>
          <label htmlFor="data">Data: </label>
          <input
            ref={dataRef}
            id="data"
            type="text"
            defaultValue={`{"name": "shnot ha 90", "director": "Shalom", "premieredYear": 2000}`}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className={styles.request}>{reqType} request</h2>
      <div className={styles.url}>
        <form onSubmit={submitHandler}>
          <div className={styles.data}>
            <label htmlFor="url">URL: </label>
            <input ref={urlRef} className={styles.input} id="url" type="text" />
          </div>
          {dataToShow}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputRequest;
