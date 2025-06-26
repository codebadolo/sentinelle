import React from 'react';
import { Typography, List, Card } from 'antd';

const { Title } = Typography;

const messagesMock = [
  { id: 1, nom: 'Paul', email: 'paul@example.com', message: 'Bonjour, je souhaite rejoindre l’agence.' },
  { id: 2, nom: 'Marie', email: 'marie@example.com', message: 'Comment postuler pour un rôle ?' },
];

const Contact = () => (
  <>
    <Title level={2} style={{ marginBottom: 24 }}>Messages reçus</Title>
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={messagesMock}
      renderItem={item => (
        <List.Item>
          <Card title={`${item.nom} - ${item.email}`}>
            {item.message}
          </Card>
        </List.Item>
      )}
    />
  </>
);

export default Contact;
