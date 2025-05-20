import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Chat from './pages/Chat';
import ChatRoom from './pages/ChatRoom';
import Friend from './pages/Friend';
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
        <Route path="/friend" element={<Friend />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/my-info" element={<MyInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<Layout showHeaderFooter={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatRoom" element={<ChatRoom />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </Router>
)
