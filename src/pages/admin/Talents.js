import React from 'react';
import { Row, Col, Typography } from 'antd';
import TalentCard from '../../components/TalentCard';

const { Title } = Typography;

const talentsMock = [
  { id: 1, prenom: 'Alice', nom: 'Dupont', genre: 'Femme', taille_cm: 170, photo: '/images/talent1.jpg' },
  { id: 2, prenom: 'Jean', nom: 'Martin', genre: 'Homme', taille_cm: 180, photo: '/images/talent2.jpg' },
  { id: 3, prenom: 'Sophie', nom: 'Lemoine', genre: 'Femme', taille_cm: 165, photo: '/images/talent3.jpg' },
];

const Talents = () => (
  <>
    <Title level={2} style={{ marginBottom: 24 }}>Gestion des talents</Title>
    <Row gutter={[16, 16]}>
      {talentsMock.map(talent => (
        <Col key={talent.id} xs={24} sm={12} md={8}>
          <TalentCard talent={talent} />
        </Col>
      ))}
    </Row>
  </>
);

export default Talents;
