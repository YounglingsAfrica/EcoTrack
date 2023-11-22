import { useDispatch } from 'react-redux';
import './App.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserProfile } from './redux/slice/profileSlice';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'; 

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());  // fetch user profile when the app loads
  }, [dispatch]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;