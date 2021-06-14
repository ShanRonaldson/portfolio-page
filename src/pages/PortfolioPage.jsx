import { PortfolioCard } from "../components/PortfolioCard";

export function Portfolio() {
  return (
    <div className="portfolio margin-top-med margin-bottom-large">
      <PortfolioCard
        heading="Natours - Advanced CSS course"
        url="https://shanschrauwen.github.io/Natours_Jonas_Course/"
        portfolioImg="./portfolio-imgs/natours_site.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Trillo Site - Advanced CSS course"
        url="https://shanschrauwen.github.io/starter-Trillo-Jonas/"
        portfolioImg="./portfolio-imgs/trillo_site.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Blog site - Web Development Bootcamp"
        url="https://udemy-course-blogsite.herokuapp.com/"
        portfolioImg="./portfolio-imgs/blog_site.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="To Do list site - Web Development Bootcamp"
        url="https://udemy-course-todolist.herokuapp.com/"
        portfolioImg="./portfolio-imgs/todo_list_site.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Simon Says - Web Development Bootcamp"
        url="https://shanschrauwen.github.io/Simon-Says-Challenge/"
        portfolioImg="./portfolio-imgs/simon_says_site.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Drum Kit - Web Development Bootcamp"
        url="https://shanschrauwen.github.io/Drum-Kit/"
        portfolioImg="./portfolio-imgs/drum_kit_site.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Newsletter sign-up - Web Development Bootcamp"
        url="https://udemy-course-email-signup.herokuapp.com/"
        portfolioImg="./portfolio-imgs/newletter_signup_site.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Dice Challenge site - Web Development Bootcamp"
        url="https://shanschrauwen.github.io/Dice-Challenge/"
        portfolioImg="./portfolio-imgs/dice_site.jpg"
        alt="Screenshot of front page of website"
      />
    </div>
  );
}
