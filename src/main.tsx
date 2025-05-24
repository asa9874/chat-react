import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
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
import ProtectedRoute from './components/ProtectedRoute';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/friend" element={<ProtectedRoute><FriendList/></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><ChatRoomList/></ProtectedRoute>} />
        <Route path="/my-info" element={<ProtectedRoute><MyInfo/></ProtectedRoute>} />
        <Route path="*" element={<ProtectedRoute><NotFound/></ProtectedRoute>} />
      </Route>
      <Route element={<Layout showHeaderFooter={false} />}>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/chatRoom" element={<ProtectedRoute><ChatRoom/></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      </Route>
    </Routes>
  </Router>
)
