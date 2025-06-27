// src/components/AdminGate.js
import { useContext } from 'react';
import DashboardLayout from '../pages/admin/DashboardLayout';
import { AuthContext } from './context/AuthContext';
import LoginForm from './LoginForm';

const AdminGate = () => {
  const { token } = useContext(AuthContext);

  return token ? <DashboardLayout /> : <LoginForm />;
};

export default AdminGate;
