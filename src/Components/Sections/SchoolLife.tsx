import { Container, Row } from "react-bootstrap";
import { SchoolLifeData } from "src/constants/constants";

//motion
import { motion } from "framer-motion";
const SchoolLife = () => {
  return (
    <div id="SchoolLife" className="SchoolLife">
      <Container>
        <div className="header">الحياة المدرسية الخاصة بطفلك</div>
        <Row>
          {SchoolLifeData.map((e) => {
            return (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                key={e.id}
                className={e.className}
              >
                <img src={e.imgsrc} alt={e.name} className="img-fluid" />
                <div className="name">{e.name}</div>
                <div className={e.classNameDetails}>
                  <div className="clock">
                    <e.icon /> {e.desc}
                  </div>
                  <div className="line"></div>
                  <div className="desc">{e.info}</div>
                  <div className="more">إقراء المزيد</div>
                </div>
              </motion.div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SchoolLife;
