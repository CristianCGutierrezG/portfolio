//images
import bgCastle from "../images/Back-ground/BigSize/Castle.gif";
import imgGitRepo from "../images/Sprites/BigSize/GitHub.png";
import imgLinkedin from "../images/Sprites/BigSize/LinkedIn.png";

export default function Contact(props) {
  return (
    <section id={props.id}>
      <div className="contact_background"  
        style={{
          backgroundImage: `url(${bgCastle ? bgCastle : ""})`,
        }}>
        <div className="contact_links">
          <div className="contact_links-box">
            <a href="https://github.com/CristianCGutierrezG">
              <img src={imgGitRepo} alt="GitHubRepo" />
            </a>
          </div>
          <div className="contact_links-box">
            <a href="/">
              <img src={imgLinkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
