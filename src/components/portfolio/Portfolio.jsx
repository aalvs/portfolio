import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/users/4206856/screenshots/18769569/media/85d3f27f1430b02172ebd4f68e2019e5.png",
    title: "UI Calculator",
    github: "https://github.com/aalvs",
    preview: "https://dribbble.com/shots/18769569-UI-Calculator",
  },
  {
    id: 2,
    image:
      "https://cdn.dribbble.com/users/4206856/screenshots/16429466/media/07680c2318e9a519e174955d0bfaac13.png",
    title: "VOY - SmartPOS",
    github: "https://github.com/aalvs",
    preview: "https://dribbble.com/shots/16429466-Voy-Tickets-App-SmartPOS",
  },
  {
    id: 3,
    image:
      "https://cdn.dribbble.com/users/4206856/screenshots/16429439/media/15e5c0c82b7a7dca324e96fa60595a60.png",
    title: "Medical Devices - Marketplace",
    github: "https://github.com/aalvs",
    preview: "https://dribbble.com/shots/16429439-Medical-Devices-Marketplace",
  },
  {
    id: 4,
    image:
      "https://cdn.dribbble.com/users/4206856/screenshots/16418295/media/a6cbedea86edde9a480eaa114f4294fb.png",
    title: "DigitalCred - Landing Page",
    github: "https://github.com/aalvs",
    preview: "https://dribbble.com/shots/16418295-DigitalCred-Landing-page",
  },
  {
    id: 5,
    image:
      "https://cdn.dribbble.com/users/4206856/screenshots/16418281/media/ca16a7406e08844b9b47f8fb26a91fd8.png",
    title: "DigitalCred -  Funnel Aquisition",
    github: "https://github.com/aalvs",
    preview:
      "https://dribbble.com/shots/16418281-DigitalCred-Real-estate-credit-simulation-form",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Potfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, preview }) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={preview}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Preview
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
