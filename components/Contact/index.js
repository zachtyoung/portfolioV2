import React from "react";
import { Container } from "./styles";
const Contact = () => {
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
    setFormValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
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
      <button onClick={() => handleSubmit()}>Submit</button>
    </Container>
  );
};

export default Contact;
