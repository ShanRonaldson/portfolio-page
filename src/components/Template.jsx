export function Template(props) {
  return (
    <div className="portfolio-card">
      <h4 className="portfolio-card__heading">{props.heading}</h4>

      <a href={props.url} className="portfolio-card__link" target="_blank" rel="noreferrer">
        <img
          src={props.portfolioImg}
          alt={props.alt}
          className="portfolio-card__img"
        />
      </a>
    </div>
  );
}

export default Template;
