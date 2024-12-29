import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";

const Email = () => {
  const form = useRef();

  const formSchema = yup.object().shape({
    from_name: yup.string().required("please enter your name"),
    reply_to: yup
      .string()
      .email()
      .required("please enter a valid email address"),
    message: yup.string().required("please enter a message"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      from_name: "",
      reply_to: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: () => {
      setLoading(true);
      emailjs
        .sendForm("service_jz3d31c", "template_sau8r19", form.current, {
          publicKey: "2CBV5usGCJRMr4WbB",
        })
        .then(
          () => {
            formik.resetForm();
            setLoading(false);
          },
          (error) => {
            setLoading(false);
          },
        );
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form className="ui large form" ref={form} onSubmit={formik.handleSubmit}>
        <div style={{ justifyContent: "center" }} className="field">
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name..."
            value={formik.values.from_name}
            onChange={formik.handleChange}
          />
          {formik.errors && (
            <p style={{ color: "red", textAlign: "center" }}>
              {formik.errors.from_name}
            </p>
          )}
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email..."
            value={formik.values.reply_to}
            onChange={formik.handleChange}
          />
          {formik.errors && (
            <p style={{ color: "red", textAlign: "center" }}>
              {formik.errors.reply_to}
            </p>
          )}
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your Message..."
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {formik.errors && (
            <p style={{ color: "red", textAlign: "center" }}>
              {formik.errors.message}
            </p>
          )}
        </div>
        {loading ? (
          <button className="ui basic fluid large loading button" type="submit">
            Send Email
          </button>
        ) : (
          <button
            className="ui circular secondary fluid large button"
            type="submit"
          >
            Send Email
          </button>
        )}
      </form>
    </>
  );
};
export default Email;
