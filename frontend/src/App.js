import { useDispatch } from 'react-redux';
import './App.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserProfile } from './redux/slice/profileSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());  // fetch user profile when the app loads
  }, [dispatch]);


  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
