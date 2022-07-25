import React from "react";
import "./testimonials.css";

// import required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGSn-Avuykptg/profile-displayphoto-shrink_200_200/0/1571073482834?e=1664409600&v=beta&t=3kDuKeLZ-pq-5XtMd4JhJB8q0XiYeYnTgfYCY1BeRdQ",
    name: "Marcus Niemeyer",
    review:
      "Conheci o André na Alô Ingressos, trata-se de um profissional dedicado, atencioso e com uma excelente relação interpessoal. Perfil hands on, corroborou fortemente para o sucesso da equipe no desenvolvendo das novas ferramentas da companhia nas áreas de UX/UI.",
  },
  {
    id: 2,
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHPXeaNg9IA3Q/profile-displayphoto-shrink_200_200/0/1602708444694?e=1664409600&v=beta&t=ZHfxsN0Fbjgdm8HyFy6Cw21HL3bU5COwZGB6XIa2IkQ",
    name: "Ewerson Santos",
    review:
      "André, excelente profissional, sabe trabalhar em equipe, comunicativo, respeita a opinião de todos e com isso consegue assimilar caminhos mais assertivos, grandes parcerias fizemos trabalhando em conjunto do depto de Markentig e o depto Comercial na Alô Ingressos.",
  },
  {
    id: 3,
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQHe5Xx1tjoGYg/profile-displayphoto-shrink_200_200/0/1517500507158?e=1664409600&v=beta&t=tV0CdLBQWqFWaoDPKAogBv8Le9-IyuzhdDEi2ruGexs",
    name: "Lucas Konrath",
    review:
      "Trabalhei diretamente com o André ao longo de praticamente um ano, desde o inicio demonstrando versatilidade e entendimento das necessidades do projeto fazendo o necessário para seguirmos evoluindo, sempre educado e humildade na hora de receber feedbacks.",
  },
  {
    id: 4,
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFiLPDL1m5QOw/profile-displayphoto-shrink_200_200/0/1658767299436?e=1664409600&v=beta&t=Ycc1daTr3WPlE9dOFHJoex1ForU_AW1S5tU045ixqsk",
    name: "Pedro Melo",
    review:
      "Tive a oportunidade de trabalhar com o André por alguns meses e afirmo, sem sombra de dúvidas, o quão colaborativo, talentoso e prestativo ele é. Um profissional excelente que com certeza agrega de forma diferenciada com o seu trabalho. Super recomendo!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>LinkedIn Recommendations</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="testimonial_avatar">
                <img src={image} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className="testimonial_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
