import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';

const { Text, Title } = Typography;

const TalentCard = ({ talent }) => (
  <Card hoverable style={{ width: 300, margin: 'auto' }}>
    <Space direction="vertical" align="center" style={{ width: '100%' }}>
      <Avatar size={120} src={talent.photo} alt={`${talent.prenom} ${talent.nom}`} />
      <Title level={4}>{talent.prenom} {talent.nom}</Title>
      <Text type="secondary">{talent.genre}</Text>
      <Text>Taille : {talent.taille_cm} cm</Text>
    </Space>
  </Card>
);

export default TalentCard;
