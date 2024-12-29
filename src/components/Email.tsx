import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";

const Email = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const formSchema = yup.object().shape({
    from_name: yup.string().required("ERR: Name required"),
    reply_to: yup.string().email().required("ERR: Valid email required"),
    message: yup.string().required("ERR: Message required"),
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
      if (!form.current) return;
      setLoading(true);
      emailjs
        .sendForm("service_jz3d31c", "template_sau8r19", form.current, {
          publicKey: "2CBV5usGCJRMr4WbB",
        })
        .then(
          () => {
            formik.resetForm();
            setLoading(false);
            setShowForm(false);
            setEmailSent(true);
            setTimeout(() => setEmailSent(false), 5000); // Hide after 5s
          },
          (error) => {
            setLoading(false);
            console.error(error);
          },
        );
    },
  });

  return (
    <div className="w-full max-w-xl mx-auto mt-12">
      {emailSent && (
        <div className="animate-fadeIn text-center mb-4 font-dos">
          Your email has been sent
        </div>
      )}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full border border-[var(--terminal-color)] p-2 font-dos
            hover:bg-[var(--terminal-color)] hover:text-[var(--theme-bg)] transition-colors"
        >
          GET IN TOUCH
        </button>
      ) : (
        <div className="animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-dos">C:\{">"}CONTACT FORM</h2>
            <button
              onClick={() => setShowForm(false)}
              className="font-dos hover:text-red-500"
            >
              [X] CLOSE
            </button>
          </div>
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="w-full font-dos space-y-1"
            style={{ color: "var(--terminal-color)" }}
          >
            <div className="space-y-1">
              <label className="block">NAME:</label>
              <input
                type="text"
                name="from_name"
                placeholder="_"
                value={formik.values.from_name}
                onChange={formik.handleChange}
                className="w-full bg-[var(--theme-bg)] border border-[var(--terminal-color)] p-2 focus:outline-none font-dos"
                style={{ color: "var(--terminal-color)" }}
              />
              {formik.errors.from_name && (
                <p className="font-dos" style={{ color: "#ff0000" }}>
                  {formik.errors.from_name}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block">EMAIL:</label>
              <input
                type="email"
                name="reply_to"
                placeholder="_"
                value={formik.values.reply_to}
                onChange={formik.handleChange}
                className="w-full bg-[var(--theme-bg)] border border-[var(--terminal-color)] p-2 focus:outline-none font-dos"
                style={{ color: "var(--terminal-color)" }}
              />
              {formik.errors.reply_to && (
                <p className="font-dos" style={{ color: "#ff0000" }}>
                  {formik.errors.reply_to}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block">MESSAGE:</label>
              <textarea
                name="message"
                placeholder="_"
                value={formik.values.message}
                onChange={formik.handleChange}
                rows={4}
                className="w-full bg-[var(--theme-bg)] border border-[var(--terminal-color)] p-2 focus:outline-none font-dos resize-none"
                style={{ color: "var(--terminal-color)" }}
              />
              {formik.errors.message && (
                <p className="font-dos" style={{ color: "#ff0000" }}>
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full border border-[var(--terminal-color)] p-2 font-dos
          hover:bg-[var(--terminal-color)] hover:text-[var(--theme-bg)] transition-colors
          ${loading ? "animate-pulse" : ""}`}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Email;
