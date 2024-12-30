import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Email = ({ isOpen, onClose }: EmailModalProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) onClose();
  };

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
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              onClose();
              formik.resetForm();
            }, 2000);
            setLoading(false);
          },
          (error) => {
            setLoading(false);
            console.error(error);
          },
        );
    },
  });

  if (!isOpen) return null;

  return (
    <div className="w-full max-w-xl mx-auto mt-12">
      <div
        ref={modalRef}
        onClick={handleClickOutside}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div className="animate-fadeIn bg-[var(--theme-bg)] border border-[var(--terminal-color)] p-6 max-w-xl w-full mx-4">
          {showSuccess ? (
            <div className="animate-fadeIn text-center py-12 font-dos">
              Your message has been sent successfully!
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-dos">C:\{">"}CONTACT FORM</h2>
                <button
                  onClick={onClose}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Email;
