import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <div className="footer">
      <hr />
      <footer className="footer--main">
        <div className="footer--main__links">
          <a
            href="https://www.linkedin.com/in/shannon-schrauwen-562b98bb/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>

          <a
            href="https://github.com/ShanSchrauwen"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>

          <a
            href="https://stackoverflow.com/users/13308896/shanschrauwen"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
          </a>
        </div>

        <div className="footer--main__info">
          Created by Shannon Schrauwen in React and SCSS.
          <span>&copy; 2021</span>
          <span>Images from Unsplash</span>
          <div className="footer--icons">
            <FontAwesomeIcon
              icon={["fab", "react"]}
              className="footer--icons__icon"
            />
            <FontAwesomeIcon
              icon={["fab", "sass"]}
              className="footer--icons__icon"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
