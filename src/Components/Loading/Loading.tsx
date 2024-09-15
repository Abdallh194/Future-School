import Lottie from "lottie-react";
import loading from "@assets/LottieFiles/loading.json";

const Loading = () => {
  return (
    <>
      <Lottie
        animationData={loading}
        style={{
          width: "319px",
          display: "block",
          margin: "auto",
          marginTop: "204px",
        }}
      />
    </>
  );
};

export default Loading;
