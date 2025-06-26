// src/pages/admin/Dashboard.js
import {
    DollarOutlined,
    MessageOutlined,
    ProjectOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Card, Col, Row, Statistic, Typography } from 'antd';

const { Title } = Typography;

const Dashboard = () => {
  // Données statiques d'exemple
  const stats = [
    { title: 'Nombre de talents', value: 42, icon: <UserOutlined style={{ color: '#3f8600' }} /> },
    { title: 'Projets en cours', value: 7, icon: <ProjectOutlined style={{ color: '#1890ff' }} /> },
    { title: 'Messages reçus', value: 15, icon: <MessageOutlined style={{ color: '#faad14' }} /> },
    { title: 'Revenus ce mois', value: 12000, prefix: '€', icon: <DollarOutlined style={{ color: '#cf1322' }} /> },
  ];

  return (
    <div style={{ padding: 24, minHeight: '100vh', background: '#f0f2f5' }}>
    uter ici d'autres composants (graphiques, tableaux, etc.) */}
    </div>
  );
};

export default Dashboard;
