import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="cusMargin_Padding Contact" id="ContactUs">
      <Container>
        <div className="head">تواصل معنا</div>
        <div className="info">
          اذا كان هناك مشكلة ما تواصل معنا الان او تريد إخبارنا بشي ما لا تتردد
          وسوف نرد عليك خلال اقرب وقت ممكن
        </div>
        <div className="line"></div>
        <Row>
          <Col sm={12} lg={6} className="ContactCard">
            <div className="text-feild">
              <input
                type="text"
                className="form-control wid-Haf"
                placeholder="الاسم "
              />

              <input
                type="email"
                className="form-control wid-Haf"
                placeholder="البريد الإلكتروني "
              />
            </div>

            <input
              type="text"
              className="form-control wid-ful"
              placeholder="موضوع الرساله"
            />
            <textarea
              name="msg"
              id="msg"
              placeholder="الرساله"
              className="form-control"
            ></textarea>
            <input
              type="submit"
              id="submit"
              className="form-control"
              value="Submit"
            />
          </Col>
          <Col sm={12} lg={6} className=" img-card"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
