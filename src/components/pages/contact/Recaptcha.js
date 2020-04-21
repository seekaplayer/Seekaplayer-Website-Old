import React, { useEffect, useState } from "react";
import { ReCaptcha } from "react-recaptcha-google";

const Recaptcha = () => {
  const [captchaDemo, setCaptchaDemo] = useState([]);

  useEffect(() => {
    if (captchaDemo) {
      console.log("Started, just a second");
      captchaDemo.reset();
      captchaDemo.execute();
    }
  }, []);

  return (
    <>
      <ReCaptcha />
    </>
  );
};
export default Recaptcha;
