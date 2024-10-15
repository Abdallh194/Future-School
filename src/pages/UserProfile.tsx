import RighSideBar from "@Components/Sections/RighSideBar";
import SideBar from "@Components/Sections/SideBar";
import { useAppSelector } from "@Redux/hooks";

import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  //selector
  const { isloggin, NewUser } = useAppSelector((s) => s.user);

  //user chose
  const [DefaultUserView, setDefaultUserView] = useState("DefaultUserView");
  return (
    <>
      {isloggin ? (
        <HelmetProvider>
          <Helmet>
            <title> {NewUser.FullName.slice(0, 8)}</title>
            <meta
              name="description"
              content="صفحة الشخصية الخاصه بالطفل لدفع مصاريف السنويه وتعديل البيانات"
            />
          </Helmet>
          <div className="UserProfile">
            <Container fluid>
              <Row>
                <Col lg="3" md="12" className="SideBar">
                  <SideBar setDefaultUserView={setDefaultUserView} />
                </Col>
                <Col lg="9" md="12" className="UserData">
                  <RighSideBar
                    DefaultUserView={DefaultUserView}
                    NewUser={NewUser}
                    setDefaultUserView={setDefaultUserView}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </HelmetProvider>
      ) : (
        <Navigate to="/Login" replace={true} />
      )}
    </>
  );
};

export default UserProfile;
