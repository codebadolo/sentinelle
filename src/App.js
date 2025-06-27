import { useContext } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthContext, AuthProvider } from './components/context/AuthContext';
import LoginForm from './components/LoginForm';
import DashboardLayout from './pages/admin/DashboardLayout';

const AdminRoute = () => {
  const { token } = useContext(AuthContext);
  return token ? <DashboardLayout /> : <LoginForm />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Route unique /admin qui affiche login ou dashboard selon auth */}
          <Route path="/admin" element={<AdminRoute />} />

          {/* Redirection par défaut vers /admin */}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
