import { Link } from "react-router-dom";

const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <div className="CopyRight">
      <div>© مدرسة المستقبل {year}, كل الحقوق محفوظه.</div>
      <div className="">
        تم التصميم والتنفيذ بواسطة{" "}
        <Link to="https://abdallh-rakha.vercel.app/" target="_blank">
          عبدالله صبري
        </Link>
      </div>
    </div>
  );
};

export default CopyRight;
