import Login from "./components/login/login";
import { useHttpReq } from "./components/hooks/useHttpReq";

function App() {
  const { isLoading, fetchedData: loginData, sendHttp } = useHttpReq();

  const loginHandler = async (url, config) => {
    await sendHttp(url, config);
    console.log(loginData);
  };

  return (
    <>
      <Login onSubmit={loginHandler} />
      {isLoading && <p>...Loading</p>}
      {!isLoading && <h1>connceted</h1>}
    </>
  );
}

export default App;
