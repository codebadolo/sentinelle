import { Typography } from 'antd';
import './Partenaires.css';

const { Title } = Typography;

const partenaires = [
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', url: 'https://www.apple.com' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', url: 'https://www.amazon.com' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg', url: 'https://www.tesla.com' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', url: 'https://www.microsoft.com' },
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Coca-Cola_logo.svg', url: 'https://www.coca-cola.com' },
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', url: 'https://www.nike.com' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', url: 'https://www.google.com' },
  { name: 'McDonald’s', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/McDonald%27s_Golden_Arches.svg', url: 'https://www.mcdonalds.com' },
];

const Partenaires = () => (
  <section className="partenaires-section">
    <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
      Ce qui nous font confiance
    </Title>
    <div className="partenaires-logos">
      {partenaires.map(({ name, logo, url }, i) => (
        <a key={i} href={url} target="_blank" rel="noreferrer" aria-label={name} className="partner-logo-link">
          <img src={logo} alt={name} className="partner-logo" />
        </a>
      ))}
    </div>
  </section>
);

export default Partenaires;
