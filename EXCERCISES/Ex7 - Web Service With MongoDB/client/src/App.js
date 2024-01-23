import "./App.css";
import { useState } from "react";

import { useHttp } from "./components/hooks/useHttp";
import MoviesList from "./components/movies/moviesList";
import ButtonsRow from "./components/Buttons/buttonsRow";
import InputRequest from "./components/requestData/inputRequest";

function App() {
  const [request, setRequest] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { isLoading, fetchedData: movies, sendRequest } = useHttp();

  const buttonClickHandler = (reqType) => {
    setRequest(reqType);
    setButtonClicked(true);
  };

  const httpSubmitDataHandler = (url, configuration) => {
    sendRequest(url, configuration);
    // To remove the header and input lines
    setRequest(null);
    setButtonClicked(false);
  };

  return (
    <>
      <ButtonsRow onClick={buttonClickHandler} />
      {request && (
        <InputRequest reqType={request} onHttpSubmit={httpSubmitDataHandler} />
      )}
      {!buttonClicked && <MoviesList isLoading={isLoading} movies={movies} />}
    </>
  );
}

export default App;
