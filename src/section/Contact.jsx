import { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import ToastNotification from "../components/ToastNotification";
import InputText from "../components/InputText";
import TextArea from "../components/TextArea";
import { contactUs } from "../assets";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [verified, setVerified] = useState(false);
  const [errorCaptcha, setErrorCaptch] = useState(false);
  const [status, setStatus] = useState(null);
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const siteKey = import.meta.env.VITE_SITE_KEY;
  const userId = import.meta.env.VITE_USER_ID;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  const handleCaptcha = (value) => {
    if (value) {
      setVerified(true);
      setErrorCaptch(false);
    } else {
      setVerified(false);
      setErrorCaptch(true);
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;

    setStatus(null);

    setUserMessage((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = userMessage;
    if (!name || !email || !message) {
      setStatus(1);
      return;
    }

    if (name && email && message) {
      if (verified) {
        emailjs.sendForm(serviceId, templateId, e.target, userId).then(
          (results) => {
            setStatus(2);
            setUserMessage({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
            setStatus(3);
          }
        );
      } else {
        setErrorCaptch(true);
      }
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="xl:px-32 lg:px-20 md:px-16 sm:px-10 px-4 md:py-32 sm:py-20 py-16 bg-slate-200">
      <div
        className="rounded-xl overflow-hidden flex lg:flex-row flex-col"
      >
        <div className="lg:w-1/2 bg-white text-white flex justify-center items-center">
          <img src={contactUs} alt="" className="object-cover" />
        </div>
        <div className="lg:w-1/2 bg-formBg bg-cover bg-no-repeat py-16 sm:px-16 px-10">
          <h3 className="text-center mb-10 text-4xl text-white font-bold">
            تواصل معنا
          </h3>
          <form
            className="flex flex-col gap-5 w-full text-sm"
            onSubmit={handleSubmit}
          >
            <InputText
              type="text"
              title="name"
              value={userMessage.name}
              setChange={(e) => handleInputChange(e, "name")}
              labelText="الاسم"
              status={status}
            />
            <InputText
              type="email"
              title="email"
              value={userMessage.email}
              setChange={(e) => handleInputChange(e, "email")}
              labelText="البريد الالكتروني"
              status={status}
            />
            <TextArea
              title="message"
              value={userMessage.message}
              setChange={(e) => handleInputChange(e, "message")}
              labelText="الرسالة"
              status={status}
            />
            <div className="flex w-full justify-center flex-col items-center">
              <div className="g-recaptcha">
                <ReCAPTCHA sitekey={siteKey} onChange={handleCaptcha} />
              </div>
              {errorCaptcha && (
                <p className="font-kufi mt-2 text-red-600">
                  الرجاء إكمال التحقق للمتابعة
                </p>
              )}
            </div>
            {status && <ToastNotification status={status} />}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="text-light-green-100 bg-white font-bold text-base rounded-xl py-3 px-10 min-w-[100px] w-[200px] max-w-[300px] disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-light-green-100
                hover:text-white transition-colors duration-300 active:opacity-60"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
