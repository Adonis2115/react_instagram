import { Routes, Route } from "react-router-dom";
import NewPost from "./pages/NewPost";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Navigation from "./components/layout/Navbar";
import AllPost from "./pages/AllPost";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllPost />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
