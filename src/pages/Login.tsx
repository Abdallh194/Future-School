import { useState } from "react";

//bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";

//   Lottie files
import LoginLottie from "@assets/LottieFiles/LoginLottie.json";
import Lottie from "lottie-react";
//Redux
import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { ToggleLoginState } from "@Redux/user/LoginSlice";

//Form Validations
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginType } from "@Validation/LoginValidation";
import { zodResolver } from "@hookform/resolvers/zod";

//Mui
import { Alert } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

import UserProfile from "./UserProfile";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Login = () => {
  //dispath
  const dispatch = useAppDispatch();

  //navigate
  const navigate = useNavigate();

  //selector
  const { NewUser, DefaultUserEmail, DefaultUserPassword, isloggin } =
    useAppSelector((s) => s.user);

  //states
  const [isLoginError, setisLoginError] = useState(false);

  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  //handleSubmit
  const SubmitForm: SubmitHandler<LoginType> = (data) => {
    console.log(data);
    if (
      (data.email.toLocaleLowerCase() ===
        DefaultUserEmail.toLocaleLowerCase() &&
        data.password === DefaultUserPassword) ||
      (data.email.toLocaleLowerCase() === NewUser.Email.toLocaleLowerCase() &&
        data.password === NewUser.Password)
    ) {
      dispatch(ToggleLoginState());
      setisLoginError(false);
      navigate("/userprofile");
    } else {
      setisLoginError(true);
      console.log("eror");
    }
  };

  return (
    <>
      {isloggin == true ? (
        <UserProfile />
      ) : (
        <HelmetProvider>
          <Helmet>
            <title> تسجيل دخول</title>
            <meta
              name="description"
              content="مدرسة المستقبل افضل مدرسة لتعليم في تصنيف العام الماضي تسجيل دخول تسجيل طالب جديد"
            />
          </Helmet>

          <div className="Login">
            <div className="overlay">
              <Container>
                <Row>
                  <Col md={12} lg={6} className="lottieCard">
                    <Lottie animationData={LoginLottie} />
                  </Col>
                  <Col md={12} lg={6} className="formCard">
                    <div className="header">إنضمو إلينا الان </div>
                    <div className="subHeader">للحصول علي اخر الاخبار </div>
                    <div className="info">
                      وريم إيبسوم دولور الجلوس، أميت كونسيكتور أديبيسينج إيليت.
                      تتطاير حادثة التسمم الغذائي في الجسم، ولا يوجد أي سائل
                      فيها.
                    </div>
                    <Form onSubmit={handleSubmit(SubmitForm)}>
                      <Form.Group className="mb-3">
                        <Form.Label className="Lable">
                          البريد الإلكتروني
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="formInput"
                          {...register("email")}
                          isInvalid={!!errors.email?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="Lable">الرقم السري</Form.Label>
                        <Form.Control
                          type="password"
                          className="formInput"
                          {...register("password")}
                          isInvalid={!!errors.password?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password?.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      {/* <Button variant="primary" type="submit" id="submit">
                      تسجيل دخول
                    </Button> */}
                      <Button variant="primary" type="submit" id="submit">
                        تسجيل دخول
                      </Button>
                      <Link to="/Register" className="registerBtn">
                        هل لديك حساب بالفعل؟ قم بتسجيل الدخول الآن
                      </Link>
                    </Form>
                    {isLoginError && (
                      <Alert
                        style={{
                          position: "absolute",
                          top: "43px",
                          width: "30%",
                        }}
                        severity="error"
                        variant="filled"
                        className="loginError"
                      >
                        لقد قمت بإدخال اسم مستخدم أو كلمة مرور غير صالحة
                      </Alert>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </HelmetProvider>
      )}
    </>
  );
};

export default Login;
