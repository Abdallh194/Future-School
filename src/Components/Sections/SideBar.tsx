import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//icons
import {
  BsFillPersonLinesFill,
  BsInfoCircleFill,
  BsCreditCardFill,
  BsFillGeoFill,
  BsFillPassportFill,
  BsClock,
  BsMailbox,
  BsFillTelephoneInboundFill,
} from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { memo } from "react";

type TFun = {
  setDefaultUserView: (...args: string[]) => void;
};
const SideBar = ({ setDefaultUserView }: TFun) => {
  return (
    <>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Link
          to="/"
          className="logo txtDecoration_None d-flex align-items-center "
        >
          <img
            src="/logo.png"
            alt="logo"
            width={75}
            height={30}
            className="img-fluid"
          />
          <div className="page-name">مدرسة المستقبل</div>
        </Link>
      </motion.div>
      <div className="menu">
        <div className="links">
          <div
            className="item"
            onClick={() => {
              setDefaultUserView("DefaultUserView");
              window.scrollTo({ top: 200, behavior: "smooth" });
            }}
          >
            <BsFillPersonLinesFill className="icon" /> Personal Details
          </div>
          <div
            className="item"
            onClick={() => {
              setDefaultUserView("PaymentView");
              window.scrollTo({ top: 200, behavior: "smooth" });
            }}
          >
            <BsCreditCardFill className="icon" /> دفع المصاريف
          </div>
          <div
            className="item"
            onClick={() => {
              setDefaultUserView("Exams");
              window.scrollTo({ top: 200, behavior: "smooth" });
            }}
          >
            <MdHomeWork className="icon" /> الإمتحانات والدرجات
          </div>
          <div className="item">
            <BsFillGeoFill className="icon" /> اقرب مدرسة ليك
          </div>

          <div className="item">
            <BsFillPassportFill className="icon" /> المزايا الحصرية
          </div>
          <div className="item">
            <BsInfoCircleFill className="icon" /> الإبلاغ عن مشكله
          </div>
        </div>
        <hr />
        <div className="information">
          <div className="header">ملعومات عنا</div>
          <div className="info">
            <BsFillGeoFill className="icon" /> قطور , الغربيه
          </div>
          <div className="info">
            <BsClock className="icon" />
            مواعيد العمل : يوميا عدا الجمعه من الساعه 7 ص الى الساعه 2 م
          </div>
          <a
            href="mailto:Abdallhsabry194@gmail.com"
            className="info txtDecoration_None"
          >
            <BsMailbox className="icon" /> Abdallhsabry194@gmail.com
          </a>
          <a href="tel:+201091415560" className="info txtDecoration_None ">
            <BsFillTelephoneInboundFill className="icon" />
            +201091415560
          </a>
        </div>
      </div>
    </>
  );
};

export default memo(SideBar);
