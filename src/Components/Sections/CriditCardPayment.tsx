import { useEffect, useState } from "react";
// mui joy
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";

//mui
import { InfoOutlined } from "@mui/icons-material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Alert, Box } from "@mui/material";

//Redux
import { useAppDispatch } from "@Redux/hooks";
import { ActiveAnnual_Expenses } from "@Redux/user/LoginSlice";

type TUserType = {
  Annual_Expenses: boolean;
};
import check from "@assets/LottieFiles/check.json";
import Lottie from "lottie-react";
import { Spinner } from "react-bootstrap";

const CrditCardForm = ({ Annual_Expenses }: TUserType) => {
  //get card details
  const [cardNumber, setcardNumber] = useState("");
  const [Expirydate, setExpirydate] = useState("");
  const [cvv, setcvv] = useState("");
  const [cardholder, setcardholder] = useState("");

  // check card validate
  const [logginProccessSuccess, setlogginProccessSuccess] = useState(false);
  //dispatch
  const dispatch = useAppDispatch();

  //Loading effect
  //button loading effect
  const [isDisabled, setisDisabled] = useState(false);

  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    setisDisabled(true);
    const debounce = setInterval(() => {
      setisDisabled(false);
      dispatch(ActiveAnnual_Expenses());
    }, 1500);
    return () => clearInterval(debounce);
  }, [isDisabled, dispatch]);

  return (
    <>
      {Annual_Expenses ? (
        <div className="successPay">
          <h3>تم دفع المصاريف بنجاح</h3>
          <Lottie animationData={check} className="icon" />
        </div>
      ) : (
        <Card className="card-content">
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
              gap: 1.5,
            }}
          >
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>رقم البطاقة</FormLabel>
              <Input
                className="input"
                type="number"
                endDecorator={<CreditCardIcon />}
                onChange={(e) => {
                  setcardNumber(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>تاريخ إنتهاء البطاقة</FormLabel>
              <Input
                className="input"
                type="number"
                endDecorator={<CreditCardIcon />}
                onChange={(e) => {
                  setExpirydate(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>CVC/CVV</FormLabel>
              <Input
                className="input"
                type="number"
                endDecorator={<InfoOutlined />}
                onChange={(e) => {
                  setcvv(e.target.value);
                }}
              />
            </FormControl>
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>إسم حامل البطاقة </FormLabel>
              <Input
                className="input"
                placeholder="Enter cardholder's full name"
                onChange={(e) => {
                  setcardholder(e.target.value);
                }}
              />
            </FormControl>
            <Checkbox
              label="حفظ بيانات الكارت"
              sx={{ gridColumn: "1/-1", my: 1 }}
            />
            <Box className="info" sx={{ gridColumn: "1/-1" }}>
              يتم تخزين تفاصيل البطاقة لتجديد الاشتراك والمستقبل المشتريات. تم
              التحقق من صحة البطاقة باحتجاز مؤقت بقيمة 0.50 دولار أمريكي، وتم
              تحريرها بعد بضعة أيام
            </Box>
            <CardActions sx={{ gridColumn: "1/-1" }}>
              <Button
                className="BookBtn"
                onClick={() => {
                  if (
                    cardholder.length > 0 &&
                    cvv.length > 0 &&
                    Expirydate.length > 0 &&
                    cardNumber.length > 0
                  ) {
                    setisDisabled(true);
                    setlogginProccessSuccess(false);
                  } else {
                    setlogginProccessSuccess(true);
                  }
                }}
                disabled={isDisabled}
              >
                {" "}
                {isDisabled ? (
                  <>
                    <Spinner animation="border" size="sm" /> تحميل ...
                  </>
                ) : (
                  <>الدفع الأن </>
                )}
              </Button>
            </CardActions>
          </CardContent>

          {logginProccessSuccess ? (
            <Alert
              severity="error"
              style={{
                position: "absolute",
                top: "-60px",
                width: "100%",
                justifyContent: "center",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              There is an error in some of your data. Please re-enter it.
            </Alert>
          ) : (
            ""
          )}
        </Card>
      )}
    </>
  );
};

export default CrditCardForm;
