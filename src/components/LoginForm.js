// src/components/LoginForm.js
import { Alert, Button, Form, Input, Typography } from 'antd';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const { Title } = Typography;

const LoginForm = () => {
  const { token, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Redirige vers /admin si déjà connecté
  useEffect(() => {
    if (token) {
      navigate('/admin', { replace: true });
    }
  }, [token, navigate]);

  const onFinish = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        email: values.email,
        password: values.password,
      });
      // Stocke le token et l’email dans le contexte
      login(response.data.token, response.data.email);
      // Redirection vers le dashboard admin
      navigate('/admin');
    } catch (err) {
      if (err.response?.data?.non_field_errors) {
        setError(err.response.data.non_field_errors[0]);
      } else if (typeof err.response?.data === 'string') {
        setError(err.response.data);
      } else {
        setError('Erreur lors de la connexion');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 24 }}>
      <Title level={2} style={{ textAlign: 'center' }}>Connexion Admin</Title>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          closable
          onClose={() => setError(null)}
          style={{ marginBottom: 16 }}
        />
      )}
      <Form name="login" onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Veuillez entrer votre email' },
            { type: 'email', message: 'Email invalide' },
          ]}
        >
          <Input autoComplete="email" />
        </Form.Item>

        <Form.Item
          label="Mot de passe"
          name="password"
          rules={[{ required: true, message: 'Veuillez entrer votre mot de passe' }]}
        >
          <Input.Password autoComplete="current-password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Se connecter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
