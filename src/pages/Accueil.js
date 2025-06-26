import CallToAction from '../components/Accueil/CallToAction';
import Equipe from '../components/Accueil/Equipe';
import Footer from '../components/Accueil/Footer';
import Hero from '../components/Accueil/Hero';
import Navbar from '../components/Accueil/Navbar';
import Partenaires from '../components/Accueil/Partenaires';
import Services from '../components/Accueil/Services';
import Testimonials from '../components/Accueil/Testimonials';
const Accueil = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
        <Equipe />
  <Partenaires />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Accueil;
