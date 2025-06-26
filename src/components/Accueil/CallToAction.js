import { Button, Typography } from 'antd';
import './CallToAction.css';

const { Title } = Typography;

const CallToAction = () => (
  <section className="cta-section" style={{ marginTop: 80, textAlign: 'center' }}>
    <Title level={3}>Prêt à révéler votre talent ?</Title>
    <Button type="primary" size="large" className="btn-cta" onClick={() => alert('Contactez-nous')}>
      Contactez-nous
    </Button>
  </section>
);

export default CallToAction;
