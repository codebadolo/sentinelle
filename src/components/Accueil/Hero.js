import { Button, Typography } from 'antd';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <Title level={1} className="hero-title">
        Agence Artistique Sentinelle
      </Title>
      <Paragraph className="hero-subtitle">
        « Derrière chaque grand rôle, il y a une rencontre. »
      </Paragraph>
      <Paragraph className="hero-description">
        Bienvenue chez Agence Artistique Sentinelle, l’agence qui révèle et accompagne les acteurs d’aujourd’hui et de demain.
      </Paragraph>
      <Button
        type="primary"
        size="large"
        className="btn-hero"
        onClick={() => alert('Rejoindre l’agence')}
      >
        Rejoindre l’agence
      </Button>
    </div>
    <div className="hero-image" />
  </section>
);

export default Hero;
