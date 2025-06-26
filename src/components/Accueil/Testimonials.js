import { CommentOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Carousel, Rate, Typography } from 'antd';
import './Testimonials.css';

const { Title } = Typography;

const testimonials = [
  { id: 1, quote: "Sentinelle a transformé ma carrière, une équipe au top !", author: "Claire D.", role: "Actrice", rating: 5 },
  { id: 2, quote: "Professionnalisme et passion, je recommande vivement.", author: "Marc L.", role: "Réalisateur", rating: 4 },
  { id: 3, quote: "Une agence qui croit vraiment en ses talents.", author: "Sophie P.", role: "Productrice", rating: 5 },
  { id: 4, quote: "Une expérience unique et enrichissante.", author: "Paul M.", role: "Acteur", rating: 5 },
  { id: 5, quote: "Toujours à l’écoute et très professionnel.", author: "Laura T.", role: "Réalisatrice", rating: 4 },
  { id: 6, quote: "Accompagnement de qualité et résultats visibles.", author: "David R.", role: "Producteur", rating: 5 },
];

const Testimonials = () => {
  // Configuration pour afficher 3 témoignages par slide
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonials-section fade-in-slide">
      <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
        Témoignages
      </Title>

      <Carousel {...settings}>
        {testimonials.map(({ id, quote, author, role, rating }) => (
          <div key={id} className="testimonial-slide">
            <blockquote>
              <CommentOutlined style={{ fontSize: 24, color: '#1890ff', marginBottom: 12 }} />
              <p>"{quote}"</p>
            </blockquote>
            <div className="testimonial-author">
              <Avatar icon={<UserOutlined />} size={64} />
              <div className="author-info">
                <strong>{author}</strong>
                <span>{role}</span>
                <Rate disabled defaultValue={rating} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
