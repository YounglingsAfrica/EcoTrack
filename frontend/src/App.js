import './App.css';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';




function App() {
  return (
    <Router>
      <Home />
      <AppRouter />
    </Router>
  );
}

export default App;
