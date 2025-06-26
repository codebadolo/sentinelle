// src/pages/admin/DashboardLayout.js
import {
    BarChartOutlined,
    DashboardOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    ProfileOutlined,
    ProjectOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, Modal, Space, Table, Tag, Typography, message } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// Exemple simple de page Gestion Utilisateurs
const Utilisateurs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
    { key: 1, name: 'Alice Dupont', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { key: 2, name: 'Jean Martin', email: 'jean@example.com', role: 'User', status: 'Inactive' },
  ]);

  const columns = [
    { title: 'Nom', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Rôle', dataIndex: 'role', key: 'role', render: role => <Tag color={role === 'Admin' ? 'red' : 'blue'}>{role}</Tag> },
    { title: 'Statut', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Active' ? 'green' : 'gray'}>{status}</Tag> },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => { setSelectedUser(record); setModalVisible(true); }}>
            Modifier
          </Button>
          <Button type="link" danger onClick={() => message.info(`Suppression de ${record.name} (fonctionnalité à implémenter)`)}>Supprimer</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={3}>Gestion des utilisateurs</Title>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => { setSelectedUser(null); setModalVisible(true); }}>
        Ajouter un utilisateur
      </Button>
      <Table columns={columns} dataSource={users} />

      <Modal
        title={selectedUser ? 'Modifier utilisateur' : 'Ajouter utilisateur'}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => {
          message.success('Fonctionnalité de sauvegarde à implémenter');
          setModalVisible(false);
        }}
      >
        <Text>Formulaire utilisateur à développer ici (nom, email, rôle, statut...)</Text>
      </Modal>
    </>
  );
};

// Composants placeholders pour les autres pages admin
const Dashboard = () => <Title level={2}>Tableau de bord (à développer)</Title>;
const Talents = () => <Title level={2}>Gestion des talents (à développer)</Title>;
const Projets = () => <Title level={2}>Gestion des projets (à développer)</Title>;
const Actualites = () => <Title level={2}>Actualités (à développer)</Title>;
const Contact = () => <Title level={2}>Messages de contact (à développer)</Title>;
const Statistiques = () => <Title level={2}>Statistiques avancées (à développer)</Title>;
const Parametres = () => <Title level={2}>Paramètres généraux (à développer)</Title>;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Simplicité : utilisateur courant avec rôle (à remplacer par contexte ou Redux)
  const currentUser = { name: 'Admin User', role: 'Admin' };

  const toggle = () => setCollapsed(!collapsed);

  // Mapping clé route => composant
  const routesMap = {
    dashboard: <Dashboard />,
    talents: <Talents />,
    projets: <Projets />,
    actualites: <Actualites />,
    contact: <Contact />,
    utilisateurs: <Utilisateurs />,
    statistiques: <Statistiques />,
    parametres: <Parametres />,
  };

  // Extraire la clé de la route (ex: 'dashboard', 'talents', ...)
  const selectedKey = location.pathname.split('/')[2] || 'dashboard';

  // Menu utilisateur topbar
  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<ProfileOutlined />} onClick={() => message.info('Profil utilisateur (à implémenter)')}>
        Profil
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={() => {
          message.success('Déconnexion (à implémenter)');
          navigate('/login');
        }}
      >
        Déconnexion
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
        collapsedWidth={80}
        style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div
          style={{
            height: 64,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.3)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
            lineHeight: '64px',
            userSelect: 'none',
          }}
        >
          {collapsed ? 'AS' : 'AS'}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          defaultSelectedKeys={['dashboard']}
          onClick={({ key }) => navigate(`/admin/${key}`)}
        >
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            Tableau de bord
          </Menu.Item>
          <Menu.Item key="talents" icon={<UserOutlined />}>
            Talents
          </Menu.Item>
          <Menu.Item key="projets" icon={<ProjectOutlined />}>
            Projets
          </Menu.Item>
          <Menu.Item key="actualites" icon={<MessageOutlined />}>
            Actualités
          </Menu.Item>
          <Menu.Item key="contact" icon={<MessageOutlined />}>
            Contact
          </Menu.Item>

          {currentUser.role === 'Admin' && (
            <>
              <Menu.Item key="utilisateurs" icon={<TeamOutlined />}>
                Utilisateurs
              </Menu.Item>
              <Menu.Item key="statistiques" icon={<BarChartOutlined />}>
                Statistiques
              </Menu.Item>
              <Menu.Item key="parametres" icon={<SettingOutlined />}>
                Paramètres
              </Menu.Item>
            </>
          )}
        </Menu>
      </Sider>

      <Layout
        className="site-layout"
        style={{ marginLeft: collapsed ? 80 : 200, transition: 'margin-left 0.2s' }}
      >
        <Header
          style={{
            padding: '0 16px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            width: `calc(100% - ${collapsed ? 80 : 200}px)`,
            zIndex: 100,
            top: 0,
            left: collapsed ? 80 : 200,
            transition: 'all 0.2s',
            boxShadow: '0 2px 8px #f0f1f2',
          }}
        >
          <Button type="text" onClick={toggle} style={{ fontSize: 20 }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>

          <Title level={4} style={{ margin: 0, flex: 1, textAlign: 'center' }}>
            {selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1)}
          </Title>

          <Dropdown overlay={userMenu} placement="bottomRight" arrow>
            <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
          </Dropdown>
        </Header>

        <Content
          style={{
            margin: '80px 16px 24px',
            padding: 24,
            minHeight: 'calc(100vh - 104px)',
            background: '#fff',
          }}
        >
          {routesMap[selectedKey] || <Title level={2}>Page non trouvée</Title>}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
