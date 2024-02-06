import { motion } from "framer-motion";


//images
import imgGitRepo from "../images/Sprites/BigSize/GitHub.png";
import imgGitPages from "../images/Sprites/BigSize/GitHubPages.png";

const variants = {
    open: { scale: 1 },
    closed: { scale: 0 },
};

export default function CardPage(prop) {

    return(
        <motion.div
        initial={{ scale: 0 }}
        animate={prop.info !== 0 ? "open" : "closed"}
        variants={variants}
        className="cardPage"
        >
            <button onClick={() => prop.click()}>X</button>
            <div className="cardPage-title">
                <h2>{prop.title}</h2>
            </div> 
            <div className="cardPage_content">
                <div className="cardPage_content_gif">
                    <img src={prop.img} alt="page"/>
                </div>
                <div className="cardPage_content_info">
                    <div className="cardPage_content_info-intern">
                        <div className="cardPage_content_info-intern_description">
                            <p>{prop.desc}</p>
                        </div>
                            <div className="cardPage_content_info-intern_tools">{prop.children}</div>
                        <div className="cardPage_content_info-intern_links">
                            <div className="cardPage_content_info-intern_links-imgGit">
                                <h3>Demo</h3>
                                <a href={prop.linkGitPage} >
                                    <img src={imgGitPages} alt="GitHubPage" />
                                </a>
                            </div>
                            <div className="cardPage_content_info-intern_links-imgGit">
                                <h3>Repo</h3>
                                <a href={prop.linkGitRepo} >
                                    <img src={imgGitRepo} alt="GitHubRepo" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    );
}