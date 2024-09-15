import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//icons
import { BsGeoAltFill } from "react-icons/bs";
import { TbClockHour10 } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import CopyRight from "@Components/Sections/CopyRight";
const Footer = () => {
  return (
    <footer className="cusMargin_Padding">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Link to="/" className="logo txtDecoration_None">
              <LuSchool />
              <div className="page-name">مدرسة المستقبل</div>
            </Link>
            <div className="info">
              افضل مدرسة لتعليم في تصنيف العام الماضي مدرسة المستقبل الدولية
              للغات سوف نقدم لطفلك خدمات تربويه اعلي مستوي
            </div>
          </Col>
          <Col md={12} lg={6} className="DetailsCard">
            <div className="details">
              <BsGeoAltFill /> <span>قطور , الغربيه</span>
            </div>
            <div className="details">
              <TbClockHour10 />
              <span>
                مواعيد العمل : يوميا عدا الجمعه من الساعه 7 ص الى الساعه 2 م{" "}
              </span>
            </div>
            <div className="details">
              <FaPhoneAlt />
              <span style={{ direction: "rtl" }}> +201091415560 </span>
            </div>
          </Col>
        </Row>
        <hr />
        <CopyRight />
      </Container>
    </footer>
  );
};

export default Footer;
