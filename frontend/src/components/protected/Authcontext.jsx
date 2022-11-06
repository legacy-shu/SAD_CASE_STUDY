import { Navigate } from 'react-router-dom';
const Authcontext = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Authcontext;