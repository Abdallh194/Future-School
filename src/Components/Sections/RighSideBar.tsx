import { Avatar } from "@mui/material";
//lottie files
import loading from "@assets/LottieFiles/loading.json";
import under_construction from "@assets/LottieFiles/under_construction.json";
import Lottie from "lottie-react";
import { memo, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import CriditCardPayment from "./CriditCardPayment";

//icons
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
//Redux
import { ToggleLoginState } from "@Redux/user/LoginSlice";
import { useAppDispatch } from "@Redux/hooks";
type TUserType = {
  DefaultUserView: string;
  setDefaultUserView: (...args: string[]) => void;
  NewUser: {
    FullName: string;
    Phone: string;
    Email: string;
    Password: string;
    age: number;
    NiD: number;
    Address: string;
    Gender: string;
    Annual_Expenses: boolean;
  };
};

const RighSideBar = ({
  DefaultUserView,
  NewUser,
  setDefaultUserView,
}: TUserType) => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Loading) {
      return;
    }
    const intervalId = setInterval(() => {
      setLoading(false);
    }, 1000);
    return () => clearInterval(intervalId);
  });
  //dispatch
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="topsecton">
        <div className="overlay">
          <Avatar className="avatar" />
        </div>
      </div>
      {DefaultUserView == "DefaultUserView" ? (
        <div className="">
          {Loading ? (
            <Lottie
              animationData={loading}
              style={{ maxWidth: "300px", margin: " auto", marginTop: "80px" }}
            />
          ) : (
            <Container className="container">
              <div className="header">المعلومات الشخصية</div>
              <button
                className="btn btn-danger logout-Btn"
                onClick={() => {
                  dispatch(ToggleLoginState());
                }}
              >
                <LuLogOut /> تسجيل خروج
              </button>
              <div className="user-Details">
                <div className="data-container mt-4">
                  <div className="col">
                    <div className="head">اللإسم بالكامل</div>
                    <div className="info">الطفل : {NewUser.FullName}</div>
                  </div>
                  <div className="col">
                    <div className="head">الرقم القومي</div>
                    <div className="info">{NewUser.NiD}</div>
                  </div>
                  <div className="col">
                    <div className="head"> السن</div>
                    <div className="info">{NewUser.age}</div>
                  </div>
                </div>
                <hr />
                <div className="data-container mt-4">
                  <div className="col">
                    <div className="head"> البريد الإلكتروني</div>
                    <div className="info">{NewUser.Email}</div>
                  </div>
                  <div className="col">
                    <div className="head">رقم هاتف ولي الأمر</div>
                    <div className="info">{NewUser.Phone}</div>
                  </div>
                </div>
                <hr />

                <div className="data-container mt-4">
                  <div className="col">
                    <div className="head"> العنوان تفصيلا</div>
                    <div className="info">{NewUser.Address}</div>
                  </div>

                  <div className="col">
                    <div className="head"> الجنس</div>
                    <div className="info">{NewUser.Gender}</div>
                  </div>
                </div>
                <hr />
                <div className="data-container mt-4">
                  <div className="col">
                    <div className="head">المصاريف السنوية</div>
                    {NewUser.Annual_Expenses ? (
                      <div className="info" style={{ color: "green" }}>
                        <FaCheckCircle /> تم الدفع بنجاح
                      </div>
                    ) : (
                      <div className="info" style={{ color: "red" }}>
                        <FaExclamationCircle /> لم يتم الدفع
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <div className="head"> دفع المصاريف السنوية</div>
                    {NewUser.Annual_Expenses ? (
                      <div className="info" style={{ color: "green" }}>
                        <FaCheckCircle /> تم الدفع بنجاح
                      </div>
                    ) : (
                      <div className="info">
                        يجب عليك دفع المصاريف السنوية أولاً حتي لا يتعرض طفلك
                        للفصل{" "}
                        <span
                          style={{
                            textDecoration: "underline",
                            fontWeight: "700",
                            color: "#6f30f7",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setDefaultUserView("PaymentView");
                          }}
                        >
                          الدفع الان
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Container>
          )}
        </div>
      ) : DefaultUserView == "PaymentView" ? (
        <>
          {Loading ? (
            <Lottie
              animationData={loading}
              style={{
                maxWidth: "300px",
                margin: " auto",
                marginTop: "80px",
              }}
            />
          ) : (
            <Container>
              <div className="header">دفع المصاريف السنوية</div>
              <CriditCardPayment Annual_Expenses={NewUser.Annual_Expenses} />
            </Container>
          )}
        </>
      ) : (
        <>
          <Container className="under_construction">
            <h3>Sorry, Exams part is currently under construction</h3>
            <Lottie
              animationData={under_construction}
              style={{
                maxWidth: "500px",
                margin: " auto",
              }}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default memo(RighSideBar);
