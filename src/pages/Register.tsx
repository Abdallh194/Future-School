import { useState } from "react";
import regitser from "@assets/LottieFiles/regitser.json";
import Lottie from "lottie-react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  RegisterType,
} from "@Validation/RegistrationValidation";
import { useAppDispatch, useAppSelector } from "@Redux/hooks";

import { Alert } from "@mui/material";
import {
  AddNewUser,
  ToggleLoginState,
  ValidateEmailAddress,
} from "@Redux/user/LoginSlice";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";

const Register = () => {
  //dispatch
  const dispatch = useAppDispatch();

  //navigate
  const navigate = useNavigate();

  //selector
  const { exsitEmail, isloggin } = useAppSelector((s) => s.user);

  //states
  const [isRegisterError, setisRegisterError] = useState(false);
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });

  //submit form
  const SubmitForm: SubmitHandler<RegisterType> = (data) => {
    if (!exsitEmail) {
      dispatch(AddNewUser(data));
      dispatch(ToggleLoginState());
      navigate("/userprofile");
    } else {
      setisRegisterError(true);
    }
  };
  return (
    <>
      {isloggin ? (
        <UserProfile />
      ) : (
        <div className="Register">
          <div className="overlay">
            <Container>
              <Row>
                <Col md={12} lg={6} className="formCard">
                  <div className="header">انضم إلينا الآن</div>
                  <div className="info">
                    لوريم إيبسوم الآلام، الجلوس أميت كونسيكتور أديبيسيسينج
                    إيليت. ما يلي هو هذه المعاناة التي تحتاجها
                  </div>
                  <Form onSubmit={handleSubmit(SubmitForm)}>
                    <Form.Group style={{ width: "98%", margin: "5px auto" }}>
                      <Form.Label>الإسم بالكامل</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("FullName")}
                        isInvalid={!!errors.FullName?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.FullName?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="fulLine">
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label> السن</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("age")}
                          isInvalid={!!errors.age?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.age?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>الجنس</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("Gender")}
                          isInvalid={!!errors.Gender?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Gender?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <Form.Group
                      className="mb-3"
                      style={{ width: "98%", margin: "5px auto" }}
                    >
                      <Form.Label>الرقم القومي للطفل</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("NiD")}
                        isInvalid={!!errors.NiD?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.NiD?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      style={{ width: "98%", margin: "5px auto" }}
                    >
                      <Form.Label>البريد الإلكتروني </Form.Label>
                      <Form.Control
                        type="text"
                        {...register("Email")}
                        onBlur={(e) => {
                          dispatch(ValidateEmailAddress(e.target.value));
                        }}
                        isInvalid={!!errors.Email?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.Email?.message}
                      </Form.Control.Feedback>
                      {exsitEmail ? (
                        <div style={{ color: "red" }}>
                          عفوا هذا البريد الإلكتروني مستخدم من قبل عميل اخر
                        </div>
                      ) : null}
                    </Form.Group>

                    <div className="fulLine">
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>العنوان</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("Address")}
                          isInvalid={!!errors.Address?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Address?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>رقم هاتف ولي الامر</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("Phone")}
                          isInvalid={!!errors.Phone?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Gender?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="fulLine">
                      <Form.Group
                        className="mb-3 widHaf"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>كلمة المرور</Form.Label>
                        <Form.Control
                          type="password"
                          {...register("Password")}
                          isInvalid={!!errors.Password?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Password?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 widHaf"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>تاكيد كلمة المرور </Form.Label>
                        <Form.Control
                          type="password"
                          {...register("confirmPassword")}
                          isInvalid={!!errors.confirmPassword?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <Button variant="primary" type="submit" id="submit">
                      Submit
                    </Button>
                    <Link to="/Login" className="LoginBtn">
                      هل لديك حساب بالفعل؟ قم بتسجيل الدخول الآن
                    </Link>
                  </Form>
                  {isRegisterError && (
                    <Alert
                      style={{
                        position: "absolute",
                        top: "43px",
                        width: "30%",
                      }}
                      severity="error"
                      variant="filled"
                    >
                      خطا في بعض البيانات التي ادخلتها برجاء التصحيح
                    </Alert>
                  )}
                </Col>
                <Col md={12} lg={6} className="AnimationCard">
                  <Lottie animationData={regitser} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
