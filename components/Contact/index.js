import React from "react";
import { Container } from "./styles";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";
const Contact = () => {
  const hcaptchaRef = React.useRef(null);
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Execute the hCaptcha when the form is submitted
    hcaptchaRef.current.execute();
  };

  const onHCaptchaChange = async (captchaCode) => {
    // If the hCaptcha code is null or undefined indicating that
    // the hCaptcha was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        console.log(response);
        axios
          .post(
            "https://89o9l9ouee.execute-api.us-east-2.amazonaws.com/default/portfolioContactFormSubmit",
            formValues
          )
          .then((res) => console.log(res));
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      setFormValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <Container>
      <h1>Get In Touch</h1>
      <form>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Name"
          name="name"
          value={formValues.name}
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Email"
          name="email"
          value={formValues.email}
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Phone"
          name="phone"
          value={formValues.phone}
        />
        <textarea
          onChange={(e) => handleChange(e)}
          placeholder="Message"
          name="message"
          value={formValues.message}
        />
      </form>
      <HCaptcha
        id="test"
        size="invisible"
        ref={hcaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
        onVerify={onHCaptchaChange}
      />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </Container>
  );
};

export default Contact;
