import { SmileOutlined, StarOutlined, TeamOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import './Services.css';

const { Title, Paragraph } = Typography;

const services = [
  { icon: <SmileOutlined />, title: 'Casting personnalisé', description: 'Trouver le rôle parfait pour chaque talent.' },
  { icon: <StarOutlined />, title: 'Coaching professionnel', description: 'Accompagnement sur mesure pour progresser.' },
  { icon: <TeamOutlined />, title: 'Production & événements', description: 'Organisation d’événements artistiques.' },
];

const Services = () => (
  <section className="services-section fade-in-slide">
    <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
      Nos Services
    </Title>
    <Row gutter={[32, 32]} justify="center">
      {services.map(({ icon, title, description }, i) => (
        <Col key={i} xs={24} sm={12} md={8}>
          <Card hoverable className="service-card">
            <div className="service-icon">{icon}</div>
            <Title level={4}>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Services;
