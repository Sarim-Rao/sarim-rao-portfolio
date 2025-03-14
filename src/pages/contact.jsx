import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm as useFormSpree } from "@formspree/react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";
import { toast } from "react-toastify";
import * as yup from "yup";

import "./styles/contact.css";
import LinkedInBadge from "../components/common/LinkedInBadge";

// Define validation schema with Yup
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const Contact = () => {
  const [state, handleSubmitFormSpree] = useFormSpree("xqazbljb");
  const currentSEO = SEO.find((item) => item.page === "contact");
  const [inputVal, setInputVal] = useState({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (fieldName, value) => {
    try {
      validationSchema.validateSyncAt(fieldName, { [fieldName]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: undefined }));
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: err.message }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => ({ ...prev, [name]: value }));
    validateForm(name, value); // Validate on change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      validationSchema.validateSync(inputVal, { abortEarly: false });
      setIsSubmitting(true);
      handleSubmitFormSpree(inputVal);
    } catch (err) {
      const validationErrors = err.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (state.succeeded) {
      toast.success("Thanks for contacting!");
      setInputVal({ email: "", message: "" });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [state.succeeded]);

  // Determine input class based on error state
  const getInputClass = (fieldName) =>
    `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
      errors[fieldName] ? "border-red-500" : "border-gray-300"
    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`;

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="contact-title-container">
            <div className="title contact-title">
              Let's Get in Touch: Ways to Connect with Me
            </div>
            <LinkedInBadge />
            </div>

            <div className="subtitle contact-subtitle">
              Thank you for your interest in getting in touch with
              me. I welcome your feedback, questions, and
              suggestions. If you have a specific question or
              comment, please feel free to email me directly at
              &nbsp;{" "}
              <a href={`mailto:${INFO.main.email}`}>
                {INFO.main.email}
              </a>
              . I make an effort to respond to all messages within
              24 hours, although it may take me longer during busy
              periods. Alternatively, you can use the contact form
              on my website to get in touch. Simply fill out the
              required fields and I'll get back to you as soon as
              possible. Finally, if you prefer to connect on
              social media, you can find me on{" "}
              <a
                href={INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                {INFO.socials.instagram}
              </a>
              . I post regular updates and engage with my
              followers there, so don't hesitate to reach out.
              Thanks again for your interest, and I look forward
              to hearing from you!
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
            <form onSubmit={handleSubmit} className="email-form">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={inputVal.email}
                  onChange={handleChange}
                  className={getInputClass("email")}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  id="message"
                  name="message"
                  value={inputVal.message}
                  onChange={handleChange}
                  className={getInputClass("message")}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter Your Message
                </label>
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
