import './App.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';




function App() {
  return (
    <BrowserRouter>
      <Home />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
