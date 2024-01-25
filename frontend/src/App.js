import './App.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/userContext';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
