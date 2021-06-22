import { PortfolioCard } from "../components/PortfolioCard";

export function Portfolio() {
  return (
    <div className="portfolio margin-top-med margin-bottom-large">
      <PortfolioCard
        heading="Culture Guide - Global Classroom collaboration with Indiana University"
        description="A group collaboration with 3 other students. One at Haaga-Helia, and 2 from IUPUI. The objective was to create a responsive website which followed the theme of 'Culture'. Made with HTML, CSS, JavaScript with Grunt as a taskrunner and Dreamweaver for uniformity."
        url="https://iupui-hh.github.io/globalclassroom/group1/"
        portfolioImg="./portfolio-imgs/culture_guide_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Natours - Advanced CSS course"
        description="Mock-up site created during Jonas Schmedmann's 'Advanced CSS' course on Udemy. This site used float and a custom grid, and was the introduction to animations and SCSS. Made with HTML and SCSS."
        url="https://shanschrauwen.github.io/Natours_Jonas_Course/"
        portfolioImg="./portfolio-imgs/natours_site_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Trillo Site - Advanced CSS course"
        description="Mock-up site created during Jonas Schmedmann;s 'Advanced CSS' course on Udemy. This site was done to show how to use flexbox, as well as animations and to get better with SASS/SCSS. Made with HTML and SCSS."
        url="https://shanschrauwen.github.io/starter-Trillo-Jonas/"
        portfolioImg="./portfolio-imgs/trillo_site_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Blog site - Web Development Bootcamp"
        description="Blog site created during Angela Yu's Web Developer Bootcamp on Udemy. Uses mongoose, ejs, Node.js and connects to MongoDB backend. "
        url="https://udemy-course-blogsite.herokuapp.com/"
        portfolioImg="./portfolio-imgs/blog_site_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="To Do list site - Web Development Bootcamp"
        description="Interactive To Do list created during Angela Yu's Web Developer Bootcamp on Udemy. Uses ejs and Node.js."
        url="https://udemy-course-todolist.herokuapp.com/"
        portfolioImg="./portfolio-imgs/todo_list_site_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Simon Says - Web Development Bootcamp"
        description="Interactive game created during Angela Yu's Web Developer Bootcamp. Click Start to begin the game, and the JavaScript program creates a sequence of colors that you need to follow. Uses Node.js."
        url="https://shanschrauwen.github.io/Simon-Says-Challenge/"
        portfolioImg="./portfolio-imgs/simon_says_site_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Drum Kit - Web Development Bootcamp"
        description="Interactive sound playing site created during Angela Yu's Web Developer Bootcamp. Click the drum kits to play different sounds. Also works if you use the keyboard. Uses Node.js."
        url="https://shanschrauwen.github.io/Drum-Kit/"
        portfolioImg="./portfolio-imgs/drum_kit_site_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Newsletter sign-up - Web Development Bootcamp"
        description="Newsletter signup site created during Angela Yu's Web Developer Bootcamp. Stores the email address and contact information that has been input. Uses Node.js."
        url="https://udemy-course-email-signup.herokuapp.com/"
        portfolioImg="./portfolio-imgs/newletter_signup_site_small.jpg"
        alt="Screenshot of front page of website"
      />

      <PortfolioCard
        heading="Dice Challenge site - Web Development Bootcamp"
        description="Interactive game created during Angela Yu's Web Developer Bootcamp. Click Start to begin the game, and a simple program says if player 1 or player 2 has a greater di cast. Uses Node.js."
        url="https://shanschrauwen.github.io/Dice-Challenge/"
        portfolioImg="./portfolio-imgs/dice_site_small.jpg"
        alt="Screenshot of front page of website"
      />
    </div>
  );
}
