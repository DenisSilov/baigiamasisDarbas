import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage />} />
        
      </Routes>
    </Router>
  )
}

export default App;
