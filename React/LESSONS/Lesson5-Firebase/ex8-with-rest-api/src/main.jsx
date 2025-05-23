import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/rootReducer';

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
