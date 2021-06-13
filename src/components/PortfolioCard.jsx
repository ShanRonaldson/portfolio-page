export function PortfolioCard(props) {
  return (
    <div className="portfolio-card">
      <h4 className="portfolio-card__heading">{props.heading}</h4>

      <p className="portfolio-card__description">
        This is the description of the website.
      </p>

      <a
        href={props.url}
        className="portfolio-card__link"
        target="_blank"
        rel="noreferrer"
      >
        <figure className="portfolio-card__overlay">
          <img
            src={props.portfolioImg}
            alt={props.alt}
            className="portfolio-card__img"
          />

          <figcaption className="portfolio-card__caption">
            This is the description of the website
          </figcaption>
        </figure>
      </a>
    </div>
  );
}

export default PortfolioCard;
