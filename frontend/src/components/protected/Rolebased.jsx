import { Navigate } from 'react-router-dom';

const Rolebased =  ({ user}) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    if (user.role === 'admin') {
      return <Navigate to="/sessions" replace />;
    } else {
      return <Navigate to="/attendance" replace />;
    }
  }
};
export default Rolebased;
