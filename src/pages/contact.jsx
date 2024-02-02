//images
import bgCastle from "../images/Back-ground/BigSize/bgCastel.png";

export default function Contact(props) {
  return (
    <section id={props.id}>
      <div className="contact_background"  
        style={{
          backgroundImage: `url(${bgCastle ? bgCastle : ""})`,
        }}>

          </div>
    </section>
  );
}
