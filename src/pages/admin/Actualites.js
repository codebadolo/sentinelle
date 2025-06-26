import React from 'react';
import { Typography } from 'antd';
import ActualiteCard from '../../components/ActualiteCard';

const { Title } = Typography;

const actualitesMock = [
  { id: 1, titre: 'Festival 2025', contenu: 'L’agence participe au festival international.' },
  { id: 2, titre: 'Interview exclusive', contenu: 'Rencontre avec un talent prometteur.' },
];

const Actualites = () => (
  <>
    <Title level={2} style={{ marginBottom: 24 }}>Actualités</Title>
    {actualitesMock.map(actu => (
      <ActualiteCard key={actu.id} actualite={actu} />
    ))}
  </>
);

export default Actualites;
