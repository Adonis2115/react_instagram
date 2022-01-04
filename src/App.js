// import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import NewPost from './pages/NewPost';
//  import Profile from './pages/Profile';
//  import Setting from './pages/Setting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewPost />} />
    </Routes>
  );
}

export default App;
