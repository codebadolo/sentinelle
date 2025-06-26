import { LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Typography } from 'antd';
import './Equipe.css';

const { Title, Text } = Typography;

const teamMembers = [
  {
    name: 'Alice Dupont',
    role: 'Directrice Artistique',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'alice@example.com',
  },
  {
    name: 'Jean Martin',
    role: 'Responsable Casting',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'jean@example.com',
  },
  {
    name: 'Sophie Bernard',
    role: 'Chargée de Production',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'sophie@example.com',
  },
  // Ajoute d’autres membres ici
];

const Equipe = () => (
  <section className="equipe-section">
    <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
      Notre Équipe
    </Title>
    <Row gutter={[32, 32]} justify="center">
      {teamMembers.map(({ name, role, photo, linkedin, twitter, email }, i) => (
        <Col key={i} xs={24} sm={12} md={8} lg={6}>
          <Card hoverable className="team-card" cover={<Avatar src={photo} size={150} className="team-avatar" />}>
            <Card.Meta
              title={name}
              description={<Text type="secondary">{role}</Text>}
            />
            <div className="social-icons">
              <a href={linkedin} aria-label={`${name} LinkedIn`}><LinkedinOutlined /></a>
              <a href={twitter} aria-label={`${name} Twitter`}><TwitterOutlined /></a>
              <a href={`mailto:${email}`} aria-label={`Email ${name}`}><MailOutlined /></a>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Equipe;
