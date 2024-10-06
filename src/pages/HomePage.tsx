import AppBar from "@Components/Common/AppBar";
import Lottie from "lottie-react";
import { Col, Container, Row } from "react-bootstrap";

//lottiefiles
import learning from "@assets/LottieFiles/learning.json";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>مدرسة المستقبل</title>
        <meta
          name="description"
          content="مدرسة المستقبل افضل مدرسة لتعليم في تصنيف العام الماضي"
        />
      </Helmet>
      <div className="HomePage">
        <Container fluid>
          <AppBar />
          <Row>
            <Col md={12} lg={4} className="GoldCard HomeCard">
              <Lottie animationData={learning} />
            </Col>
            <Col md={12} lg={8} className="BlueCard HomeCard">
              <div className="header">مدرسة المستقبل</div>
              <div className="info">
                افضل مدرسة لتعليم في تصنيف العام الماضي
              </div>
              <div className="desc">
                نقدم لطفلك العديد من المزايا التي لا تستطيع المدارس العامة
                الوصول إليها وهنتقدم برضو مناهج متنوعة وطرق تدريس مبتكرة تعلم
                الطلاب كيفية تحقيق النجاح في عالم تتزايد فيه العولمة عشان يتخرج
                طفلك بمهارات أكاديمية قوية وتفكير نقدي ومهارات حل المشكلات و
                سيزود طفلك بالمنهج الدولي بالتعليم والمؤهلات المعترف بها
                عالميًا. و هنقدم العديد من الأنشطة ما بعد المدرسة بالإضافة إلى
                المنهج الأساسي، مثل الرياضة والموسيقى والرقص والتكنولوجيا وما
                إلى ذلك
              </div>
              <div className="NumsSec d-flex">
                <div className="col">
                  <div className="num">30</div>
                  <div className="name">المدرسين</div>
                </div>
                <div className="col">
                  <div className="num">35</div>
                  <div className="name">الدورات</div>
                </div>
                <div className="col">
                  <div className="num">50</div>
                  <div className="name">الدروس</div>
                </div>
                <div className="col">
                  <div className="num">80</div>
                  <div className="name">الانشطه</div>
                </div>
              </div>
              <div className="btns d-flex">
                <Link to="/register" className="registerBtn txtDecoration_None">
                  تسجيل
                </Link>
                <a href="#AboutUs" className="moreBtn txtDecoration_None">
                  قراءة المزيد
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
