import TechSpecs from "../components/TechSpecs";

import { Creative } from "../svg/Creative";
import { Organized } from "../svg/Organized";
import { Fast } from "../svg/Fast";
import { Fun } from "../svg/Fun";
import { Motivated } from "../svg/Motivated";
import { Solution } from "../svg/Solution";

export function Home() {
  return (
    <div className="home margin-top-med margin-bottom-med">
      <section className="home--bio margin-bottom-med">
        <h3 className="home__heading">About Me</h3>

        <div className="home--bio__content">
          <p className="home--bio__para row1__left">
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

          <div className="home__shape row1__right">
            <img src="./home-imgs/placeholder.jpg" alt="placeholder" className="home--box__img" />
          </div>

          <p className="home--bio__para row2__right">
            Through VeraContent I realized I really enjoyed content creation,
            which lead me to complete various content creation and social media
            strategy courses through Udemy. While doing SEO courses I started to
            delve into web development - where I realized that my skills in
            content creation, SEO, design, organization and my love of solving
            problems allowed me to enjoy development to a level which I never
            thought I would.
          </p>
          <div className="home__shape row2__left">
            <img src="./home-imgs/placeholder.jpg" alt="placeholder" className="home--box__img " />
          </div>

          <p className="home--bio__para row3__left">
            After doing a web development boot-camp, and advanced CSS course
            through Udemy - I applied to Haaga Helia Polytechnic University
            where I am currently studying Business Information Technology, with
            a focus on software engineering and design.
          </p>
          <div className="home__shape row3__right">
            <img src="./home-imgs/placeholder.jpg" alt="placeholder" className="home--box__img " />
          </div>
        </div>
      </section>

      <section className="home--skills margin-bottom-med">
        <h3 className="home__heading">My Skills</h3>

        <div className="home--skills__content margin-top-small">
          <div className="home--skills__svgWrapper row1__left">
            <Creative />
          </div>

          <div className="home--skills__svgWrapper row1__middle">
            <Organized />
          </div>

          <div className="home--skills__svgWrapper row1__right">
            <Fun />
          </div>

          <p className="home--skills__item row2__left">Creative</p>
          <p className="home--skills__item row2__middle">Organized</p>
          <p className="home--skills__item row2__right">Enthusiastic</p>

          <div className="home--skills__svgWrapper row3__left">
            <Motivated />
          </div>

          <div className="home--skills__svgWrapper row3__middle">
            <Solution />
          </div>

          <div className="home--skills__svgWrapper row3__right">
            <Fast />
          </div>
          <p className="home--skills__item row4__left">Self-motivated</p>

          <p className="home--skills__item row4__middle">
            Love to solve problems in efficient ways
          </p>

          <p className="home--skills__item row4__right">
            Used to working in relatively fast-paced environments
          </p>
        </div>
      </section>

      <section className="home--tech">
        <h3 className="home__heading margin-bottom-small">Tech specs</h3>

        <div className="home--tech__content">
          <TechSpecs language="HTML and CSS" rating="4" />
          <TechSpecs language="Copywriting" rating="4" />

          <TechSpecs language="Design" rating="3.5" />

          <TechSpecs language="JavaScript" rating="3" />
          <TechSpecs language="Node.JS" rating="3" />
          <TechSpecs language="GitHub" rating="3" />
          <TechSpecs language="Content creation" rating="3" />

          <TechSpecs language="React" rating="2.5" />
          <TechSpecs language="jQuery" rating="2.5" />
          <TechSpecs language="Express.JS" rating="2.5" />
          <TechSpecs language="Git" rating="2.5" />

          <TechSpecs language="MongoDB" rating="2" />
          <TechSpecs language="R" rating="2" />
          <TechSpecs language="REST API" rating="2" />
          <TechSpecs language="SEO" rating="2" />

          <TechSpecs language="TypeScript" rating="1.5" />
          <TechSpecs language="Java" rating="1" />
          <TechSpecs language="Python" rating="1" />
        </div>
      </section>
    </div>
  );
}
