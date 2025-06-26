import { HomeOutlined, PhoneOutlined, ReadOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = e => setCurrent(e.key);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo" tabIndex={0} role="link" aria-label="Accueil">
        Sentinelle
      </div>
      <Menu
        mode="horizontal"
        theme="dark"
        className="menu"
        selectedKeys={[current]}
        onClick={handleClick}
      >
        <Menu.Item key="accueil" icon={<HomeOutlined />}>
          Accueil
        </Menu.Item>
        <Menu.Item key="talents" icon={<TeamOutlined />}>
          Talents
        </Menu.Item>
        <Menu.Item key="actualites" icon={<ReadOutlined />}>
          Actualités
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined />}>
          Contact
        </Menu.Item>
      </Menu>
      <Button type="primary" className="btn-join" size="large" ghost>
        Rejoindre l’agence
      </Button>
    </header>
  );
};

export default Navbar;
