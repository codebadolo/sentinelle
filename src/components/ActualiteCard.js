import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ActualiteCard = ({ actualite }) => (
  <Card hoverable style={{ marginBottom: 16 }}>
    <Title level={4}>{actualite.titre}</Title>
    <Paragraph ellipsis={{ rows: 3 }}>{actualite.contenu}</Paragraph>
  </Card>
);

export default ActualiteCard;
