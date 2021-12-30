// import Layout from "./components/layout/Layout";
import { Route } from 'react-router-dom';
 import NewPost from './pages/NewPost';
//  import Profile from './pages/Profile';
//  import Setting from './pages/Setting';

function App() {
  return (
    <div>
      <Route path='/'>
        <NewPost />
      </Route>
      {/* <Route path='/path'>
        <Profile />
      </Route>
      <Route path='/setting'>
        <Setting />
      </Route> */}
    </div>
  );
}

export default App;
