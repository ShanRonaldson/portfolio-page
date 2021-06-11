import TechSpecs from "../components/TechSpecs";

export function Home() {
  return (
    <div className="home">
      <section className="home--bio">
        <h3 className="home--bio__heading">About Me</h3>

        <div className="home--bio__content">
          <p className="home--bio__para left">
            Originally from Stellenbosch, South Africa I moved to Helsinki,
            Finland late August 2019. Since moving to Finland I have worked as a
            copywriter for VeraContent, as well as a freelancer in my own
            capacity. I also worked on Beagle in Mind's (an NPO) content
            creation and social media presence. My work for Beagle in Mind was
            simple, and I just needed to increase their presence on their
            Instagram and Facebook accounts. As a freelancer for VeraContent I
            worked on various projects, particularly for real estate listings
            and travel websites. <br />
            Through VeraContent I realized I really enjoyed content creation,
            which lead me to complete various content creation and social media
            strategy courses through Udemy. While doing SEO courses I started to
            delve into web development - where I realized that my skills in
            content creation, SEO, design, organization and my love of solving
            problems allowed me to enjoy development to a level which I never
            thought I would.
          </p>
            <img
              src={require("../images/placeholder.jpg")}
              alt="placeholder"
              className="home--bio__img"
            />
          </div>
          <div className="home--box">
            <p className="home--bio__para left">
              After doing a web development boot-camp, and advanced CSS course
              through Udemy - I applied to Haaga Helia Polytechnic University
            where I am currently studying Business Information Technology, with
            a focus on software engineering and design.
          </p>
        </div>
      </section>

      <section className="home--skills">
        <h3 className="home--skills__heading">My Skills</h3>
        <div className="home--skills__content">
          <ul className="home--skills__ul">
            <li className="home--skills__li">Creative</li>
            <li className="home--skills__li">Organized</li>
            <li className="home--skills__li">
              Love to solve problems in efficient ways
            </li>
            <li className="home--skills__li">Self-motivated </li>
            <li className="home--skills__li">Enthusiastic</li>
            <li className="home--skills__li">
              Used to working in relatively fast-paced environments
            </li>
          </ul>
        </div>
      </section>

      <section className="home--tech">
        <h3 className="home--tech__heading">Tech specs</h3>
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
