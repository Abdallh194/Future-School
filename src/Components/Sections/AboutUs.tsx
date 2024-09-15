import { Col, Container, Row } from "react-bootstrap";
import { Data } from "src/constants/constants";

//motion
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div id="AboutUs" className="AboutUs cusMargin_Padding">
      <Container>
        <div className="head">من نحن</div>
        <Row>
          <Col sm={12} md={6} className="RightHead">
            افضل مدرسة لتعليم في تصنيف العام الماضي مدرسة المستقبل الدولية للغات
          </Col>
          <Col sm={12} md={6} className="leftHead">
            افتتحت المدرسة الأولى في القاهرة عام 1911 تحت اسم المدرسة الدولية
            للغات، والتي أدرجت منذ البداية الإنجليزية والفرنسية والألمانية في
            مناهجها.
          </Col>
          {Data.map((e) => {
            return (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                key={e.id}
                className={e.className}
              >
                <e.icon className="icon" />
                <div className="head">{e.name}</div>
                <div className="desc">{e.desc}</div>
                <div className="more">قراءة المزيد</div>
              </motion.div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
