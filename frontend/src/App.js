import './App.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
