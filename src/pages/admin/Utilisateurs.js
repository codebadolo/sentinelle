// src/pages/admin/Utilisateurs.js
import { Button, Form, Input, message, Modal, Select, Space, Table, Tag, Typography } from 'antd';
import { useEffect, useState } from 'react';

const { Title } = Typography;
const { Option } = Select;

const Utilisateurs = () => {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  // Exemple de données mock (à remplacer par appel API)
  useEffect(() => {
    setUsers([
      { key: 1, name: 'Alice Dupont', email: 'alice@example.com', role: 'Admin', status: 'Active' },
      { key: 2, name: 'Jean Martin', email: 'jean@example.com', role: 'User', status: 'Inactive' },
    ]);
  }, []);

  const openModal = (user = null) => {
    setEditingUser(user);
    if (user) {
      form.setFieldsValue(user);
    } else {
      form.resetFields();
    }
    setModalVisible(true);
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: 'Confirmer la suppression',
      content: 'Voulez-vous vraiment supprimer cet utilisateur ?',
      okText: 'Oui',
      cancelText: 'Non',
      onOk: () => {
        setUsers(users.filter(u => u.key !== key));
        message.success('Utilisateur supprimé');
      },
    });
  };

  const onFinish = (values) => {
    if (editingUser) {
      // Modifier utilisateur
      setUsers(users.map(u => (u.key === editingUser.key ? { ...u, ...values } : u)));
      message.success('Utilisateur modifié');
    } else {
      // Ajouter utilisateur
      const newUser = { key: Date.now(), ...values };
      setUsers([...users, newUser]);
      message.success('Utilisateur ajouté');
    }
    setModalVisible(false);
  };

  const columns = [
    { title: 'Nom', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Rôle',
      dataIndex: 'role',
      key: 'role',
      render: role => <Tag color={role === 'Admin' ? 'red' : 'blue'}>{role}</Tag>,
    },
    {
      title: 'Statut',
      dataIndex: 'status',
      key: 'status',
      render: status => <Tag color={status === 'Active' ? 'green' : 'gray'}>{status}</Tag>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => openModal(record)}>Modifier</Button>
          <Button type="link" danger onClick={() => handleDelete(record.key)}>Supprimer</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={2}>Gestion des utilisateurs</Title>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => openModal()}>
        Ajouter un utilisateur
      </Button>
      <Table columns={columns} dataSource={users} />

      <Modal
        title={editingUser ? 'Modifier utilisateur' : 'Ajouter utilisateur'}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
        okText="Enregistrer"
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Nom"
            name="name"
            rules={[{ required: true, message: 'Veuillez entrer le nom' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Veuillez entrer l’email' },
              { type: 'email', message: 'Email invalide' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Rôle"
            name="role"
            rules={[{ required: true, message: 'Veuillez sélectionner un rôle' }]}
          >
            <Select>
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Statut"
            name="status"
            rules={[{ required: true, message: 'Veuillez sélectionner un statut' }]}
          >
            <Select>
              <Option value="Active">Actif</Option>
              <Option value="Inactive">Inactif</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Utilisateurs;
