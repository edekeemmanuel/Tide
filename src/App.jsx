import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Dashboard, Login, Register, Error, Categories } from './pages';
import SharedLayout from './pages/SharedLayout';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}
//https://react-icons.github.io/react-icons/search?q=arrow
export default App;