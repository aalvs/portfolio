import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Potfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG1} alt="This is a portfolio item" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/aalvs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/aalvs"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG2} alt="This is a portfolio item" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/aalvs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/aalvs"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG3} alt="This is a portfolio item" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/aalvs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/aalvs"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG4} alt="This is a portfolio item" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/aalvs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/aalvs"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG5} alt="This is a portfolio item" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/aalvs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/aalvs"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="This is a portfolio item" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/aalvs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/aalvs"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
