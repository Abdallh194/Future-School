import { Container, Row } from "react-bootstrap";

// icons
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

//constants
import { Teachers } from "src/constants/constants";

//motion
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div id="Services" className="Services cusMargin_Padding">
      <Container>
        <div className="header">معمينا ذو الخبره</div>
        <Row>
          {Teachers.map((e) => {
            return (
              <motion.div
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                key={e.id}
                className="ServiceCard"
              >
                <img src={e.imgsrc} alt={e.name} className="img-fluid" />
                <div className="details">
                  <div className="name">{e.name}</div>
                  <div className="dep">{e.dep}</div>
                  <div className="socials">
                    <FaFacebook className="mx-2 icon" />
                    <RiInstagramFill className="mx-2 icon" />
                    <FaTwitter className="mx-2 icon" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
