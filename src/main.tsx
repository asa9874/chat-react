import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import FriendAdd from './pages/AddFriend/indesx';
import ChatRoom from './pages/ChatRoom';
import ChatRoomList from './pages/ChatRoomList';
import FriendList from './pages/FriendList';
import Home from './pages/Home';
import Login from './pages/Login';
import MyInfo from './pages/MyInfo';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import './styles/index.css';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/friend" element={<FriendList />} />
        <Route path="/friendAdd" element={<FriendAdd />} />
        <Route path="/chat" element={<ChatRoomList />} />
        <Route path="/my-info" element={<MyInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<Layout showHeaderFooter={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatRoom/:chatRoomId" element={<ChatRoom  />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </Router>
)
