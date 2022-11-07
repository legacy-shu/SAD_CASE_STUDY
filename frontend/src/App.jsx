import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminBoard from './components/pages/AdminBoard';
import Login from './components/pages/Login';
import AdminDetail from './components/pages/AdminDetail';
import StudentBoard from './components/pages/StudentBoard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import Protected from './components/protected/Protected';
import Rolebased from './components/protected/Rolebased';
import Authcontext from './components/protected/Authcontext';

function App({ attendanceService, authService }) {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  useEffect(() => {
    async function fetchData() {
      const user = await authService.me();
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <Container fixed>
      <Nav
        attendanceService={attendanceService}
        authService={authService}
        user={user}
      ></Nav>
      <Header user={user} />
      <Router>
        <Routes>
          <Route path="/" element={<Rolebased user={user} />}></Route>

          <Route
            path="/sessions"
            element={
              <Protected user={user}>
                <AdminBoard attendanceService={attendanceService} />
              </Protected>
            }
          ></Route>

          <Route
            path="/sessions/:id"
            element={
              <Protected user={user}>
                <AdminDetail attendanceService={attendanceService} />
              </Protected>
            }
          ></Route>

          <Route
            path="/attendance"
            element={
              <Protected user={user}>
                <StudentBoard
                  user={user}
                  attendanceService={attendanceService}
                />
              </Protected>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <Authcontext user={user}>
                <Login authService={authService} login={handleLogin} />
              </Authcontext>
            }
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
