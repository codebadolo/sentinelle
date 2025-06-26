import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Button, Col, Input, Layout, Row, Space, Typography } from 'antd';
import './Footer.css';

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const FooterComponent = () => {
  return (
    <Footer className="site-footer">
      <Row gutter={[48, 32]} justify="space-around">
        {/* Présentation */}
        <Col xs={24} sm={12} md={6}>
          <div className="footer-logo">Sentinelle</div>
          <Paragraph className="footer-slogan">
            L’agence qui révèle et accompagne les acteurs d’aujourd’hui et de demain.
          </Paragraph>
        </Col>

        {/* Menu secondaire */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4}>Liens utiles</Title>
          <ul className="footer-links">
            <li><a href="/about">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </Col>

        {/* Contact */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4}>Contactez-nous</Title>
          <Space direction="vertical" size="small" className="footer-contact">
            <Text><EnvironmentOutlined /> 123 Rue de l’Art, Paris, France</Text>
            <Text><PhoneOutlined /> +33 1 23 45 67 89</Text>
            <Text><MailOutlined /> contact@agencesentinelle.fr</Text>
          </Space>
        </Col>

        {/* Newsletter */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4}>Newsletter</Title>
          <Paragraph>Inscrivez-vous pour recevoir nos dernières actualités.</Paragraph>
          <Input.Group compact>
            <Input style={{ width: '70%' }} placeholder="Votre email" />
            <Button type="primary" style={{ width: '30%' }}>S’abonner</Button>
          </Input.Group>
        </Col>
      </Row>

      {/* Réseaux sociaux */}
      <Row justify="center" className="footer-social">
        <Space size="large">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookOutlined /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterOutlined /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramOutlined /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinOutlined /></a>
        </Space>
      </Row>

      {/* Mentions légales et copyright */}
      <Row justify="space-between" align="middle" className="footer-bottom">
        <Text type="secondary">© 2025 Agence Artistique Sentinelle. Tous droits réservés.</Text>
        <Space size="middle" className="footer-legal-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/cgu">Conditions générales d’utilisation</a>
          <a href="/politique-confidentialite">Politique de confidentialité</a>
        </Space>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
