import React from 'react';
import { Typography } from 'antd';
import ProjetCard from '../../components/ProjetCard';

const { Title } = Typography;

const projetsMock = [
  { id: 1, titre: 'Film A', description: 'Un film dramatique passionnant.' },
  { id: 2, titre: 'Série B', description: 'Une série à suspense.' },
];

const Projets = () => (
  <>
    <Title level={2} style={{ marginBottom: 24 }}>Gestion des projets</Title>
    {projetsMock.map(projet => (
      <ProjetCard key={projet.id} projet={projet} />
    ))}
  </>
);

export default Projets;
