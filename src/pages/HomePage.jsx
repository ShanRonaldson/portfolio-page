import { Organized } from "../svg/Organized";
import TechSpecs from "../components/TechSpecs";

import image from "../images/placeholder.jpg";
import { Creative } from "../svg/Creative";
import { Fast } from "../svg/Fast";
import { Fun } from "../svg/Fun";
import { Motivated } from "../svg/Motivated";
import { Solution } from "../svg/Solution";

export function Home() {
  return (
    <div className="home">
      <section className="home--bio">
        <h3 className="home__heading">About Me</h3>

        <div className="home--bio__content">
          <p className="home--box__para top__left">
            Originally from Stellenbosch, South Africa I moved to Helsinki,
            Finland late August 2019. Since moving to Finland I have worked as a
            copywriter for VeraContent, as well as a freelancer in my own
            capacity. I also worked on Beagle in Mind's (an NPO) content
            creation and social media presence. My work for Beagle in Mind was
            simple, as I just needed to increase their presence on their
            Instagram and Facebook accounts. As a freelancer for VeraContent I
            worked on various projects, particularly for real estate listings
            and travel websites.
          </p>

          <div className="home__shape top__right">
            <img src={image} alt="placeholder" className="home--box__img" />
          </div>

          <p className="home--box__para middle__right">
            Through VeraContent I realized I really enjoyed content creation,
            which lead me to complete various content creation and social media
            strategy courses through Udemy. While doing SEO courses I started to
            delve into web development - where I realized that my skills in
            content creation, SEO, design, organization and my love of solving
            problems allowed me to enjoy development to a level which I never
            thought I would.
          </p>
          <div className="home__shape middle__left">
            <img src={image} alt="placeholder" className="home--box__img " />
          </div>

          <p className="home--box__para bottom__left">
            After doing a web development boot-camp, and advanced CSS course
            through Udemy - I applied to Haaga Helia Polytechnic University
            where I am currently studying Business Information Technology, with
            a focus on software engineering and design.
          </p>
          <div className="home__shape bottom__right">
            <img src={image} alt="placeholder" className="home--box__img " />
          </div>
        </div>
      </section>

      <section className="home--skills">
        <h3 className="home__heading">My Skills</h3>
        <div className="home--skills__content">
          <div className="home--skills__svgWrapper">
            <Creative />
          </div>
          <p className="home--skills__item">Creative</p>
          <div className="home--skills__svgWrapper">
            <Organized />
          </div>
          <p className="home--skills__item">Organized</p>
          <div className="home--skills__svgWrapper">
            <Solution />
          </div>
          <p className="home--skills__item">
            Love to solve problems in efficient ways
          </p>
          <div className="home--skills__svgWrapper">
            <Motivated />
          </div>
          <p className="home--skills__item">Self-motivated</p>
          <div className="home--skills__svgWrapper">
            <Fun />
          </div>
          <p className="home--skills__item">Enthusiastic</p>
          <div className="home--skills__svgWrapper">
            <Fast />
          </div>
          <p className="home--skills__item">
            Used to working in relatively fast-paced environments
          </p>
          <div className="home--skills__svgWrapper"></div>
        </div>
      </section>

      <section className="home--tech">
        <h3 className="home__heading">Tech specs</h3>
        <TechSpecs language="HTML and CSS" rating="4" />

        <TechSpecs language="JavaScript" rating="3" />
        <TechSpecs language="Node.JS" rating="3" />

        <TechSpecs language="React" rating="2.5" />

        <TechSpecs language="Git" rating="2.5" />

        <TechSpecs language="MongoDB" rating="2" />
        <TechSpecs language="R" rating="2" />

        <TechSpecs language="TypeScript" rating="1.5" />
        <TechSpecs language="Java" rating="1" />
        <TechSpecs language="Python" rating="1" />
      </section>
    </div>
  );
}
