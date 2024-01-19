import { motion } from "framer-motion";

const variants = {
  open: { scale: 1 },
  closed: { scale: 0 },
};

export default function Card(prop) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={prop.show !== 0 ? "open" : "closed"}
      variants={variants}
      className="about_card"
    >
      <button onClick={() => prop.click()}>X</button>
      <div className="about_card-title">
        <h2>{prop.title}</h2>
      </div>      
      <div className="about_card-info">
        <div>{prop.children}</div>
      </div>
    </motion.div>
  );
}
