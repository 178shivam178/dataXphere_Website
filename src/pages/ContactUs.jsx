import React, { useEffect, useRef, useState } from "react";
import guy from "../assets/guy.png";

// Contact form that sends submissions to an email inbox using Formspree.
// Configurable via Vite env: VITE_CONTACT_FORM_ENDPOINT

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formSectionRef = useRef(null);
  const nameInputRef = useRef(null);
  const errorRef = useRef(null);
  const successRef = useRef(null);

  const endpoint =
    import.meta?.env?.VITE_CONTACT_FORM_ENDPOINT || "https://formspree.io/f/mgvngbba";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = `Submission failed (${res.status})`;
        try {
          const data = await res.json();
          if (data?.errors && Array.isArray(data.errors) && data.errors[0]?.message) {
            msg = data.errors[0].message;
          }
        } catch { }
        throw new Error(msg);
      }

      try {
        form.reset();
      } catch { }
      setIsSubmitted(true);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // On mount: scroll to the form and focus first field
  useEffect(() => {
    const id = setTimeout(() => {
      try {
        formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch {}
      try {
        nameInputRef.current?.focus({ preventScroll: true });
      } catch {
        nameInputRef.current?.focus?.();
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  // After successful submit, scroll to and focus the thank-you message
  useEffect(() => {
    if (!isSubmitted) return;
    const id = setTimeout(() => {
      try {
        successRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch {}
      try {
        successRef.current?.focus?.({ preventScroll: true });
      } catch {
        successRef.current?.focus?.();
      }
    }, 0);
    return () => clearTimeout(id);
  }, [isSubmitted]);

  // On failure: scroll to and focus the error message
  useEffect(() => {
    if (!error) return;
    const id = setTimeout(() => {
      try {
        errorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch {}
      try {
        errorRef.current?.focus?.({ preventScroll: true });
      } catch {
        errorRef.current?.focus?.();
      }
    }, 0);
    return () => clearTimeout(id);
  }, [error]);

  return (
    <div
      className="block-layout block-layout--layout"
      style={{ maxWidth: 1224, margin: "0 auto", padding: "24px 16px 52px" }}
    >
      {/* Title block */}
      <div
        className="layout-element layout-element--layout layout-element transition transition--slide"
        style={{ textAlign: "center", margin: "0 0 16px 0", zIndex: 2 }}
      >
        <div className="text-box layout-element__component layout-element__component--GridTextBox">
          <h1 style={{ fontSize: "clamp(1.75rem, 1.6vw + 1.2rem, 3rem)", lineHeight: 1.25, margin: 0 }}>
            <span style={{ fontWeight: 600 }}>Get in Touch with Us</span>
          </h1>
        </div>
      </div>

      {/* Success message above the form */}
      {isSubmitted ? (
        <div
          ref={successRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          style={{ fontWeight: 700, fontSize: 28, margin: "0 0 16px 0", textAlign: "center" }}
        >
          Thank you for your response. We will be in touch with you.
        </div>
      ) : null}

      {/* Error message */}
      {error ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          style={{ color: "#b00020", marginBottom: "1rem", textAlign: "center" }}
        >
          {error}
        </div>
      ) : null}

      {/* Two-column layout: form + image */}
      <div
        className="two-col"
        style={{
          display: "grid",
          gap: 0,
          alignItems: "stretch",
        }}
      >
        {/* Left: Form block */}
        <div
          className="layout-element layout-element--layout layout-element transition transition--slide"
          style={{ zIndex: 3, height: "100%" }}
        >
          <div
            id="zlX1UP"
            className="form layout-element__component layout-element__component--GridForm form-card form-slab"
            style={{
              backgroundColor: "#A3E4D7",
              borderWidth: 0,
              borderRadius: 20,
              padding: 28,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #e5e7eb",
            }}
            ref={formSectionRef}
          >
            <form
              name="Contact form"
              className="form__control"
              onSubmit={handleSubmit}
              noValidate
              id="contact-form"
              aria-busy={isSubmitting}
              style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}
            >
              <div style={{ display: "grid", gap: 18, flex: 1 }}>
                <div className="input input--light">
                  <label htmlFor="name" className="input__label--light input__label">
                    Enter your first name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    className="input__component--light input__component"
                    required
                    style={{
                      width: "100%",
                      padding: 14,
                      border: "1px solid rgb(184, 192, 204)",
                      borderRadius: 12,
                      color: "#0d141a",
                      backgroundColor: "#f3f4f6",
                    }}
                    ref={nameInputRef}
                  />
                </div>

                <div className="input input--light">
                  <label htmlFor="email" className="input__label--light input__label">
                    Enter your email address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="example@domain.com"
                    type="email"
                    className="input__component--light input__component"
                    required
                    style={{
                      width: "100%",
                      padding: 14,
                      border: "1px solid rgb(184, 192, 204)",
                      borderRadius: 12,
                      color: "#0d141a",
                      backgroundColor: "#f3f4f6",
                    }}
                  />
                </div>

                <div className="input input--light">
                  <label htmlFor="message" className="input__label--light input__label">
                    Your message here*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message"
                    rows={6}
                    className="input__component--textarea input__component--light input__component"
                    required
                    style={{
                      width: "100%",
                      padding: 14,
                      border: "1px solid rgb(184, 192, 204)",
                      borderRadius: 12,
                      color: "#0d141a",
                      backgroundColor: "#f3f4f6",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  name="submit"
                  className="grid-button grid-button--primary form__button"
                  disabled={isSubmitting}
                  style={{
                    borderRadius: 50,
                    borderWidth: 0,
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    padding: "12px 20px",
                    justifySelf: "start",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? "Submitting…" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Image block */}
        <div
          className="layout-element layout-element--layout layout-element transition transition--slide image-col"
          style={{ display: "block", height: "100%" }}
        >
          <img
            src={guy}
            alt="Person working illustration"
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Simple responsive tweak + improved focus/hover styles */}
      <style>{`
        .two-col { grid-template-columns: 1fr; gap: 0; }
        .image-col { display: none; }
        .form-card { box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
        .form-slab { border-radius: 20px; }
        @media (min-width: 640px) {
          .form-card { padding: 32px; }
        }
        @media (min-width: 900px) {
          .two-col { grid-template-columns: 3fr 2fr; }
          .image-col { display: block; border-left: 1px solid #e5e7eb; }
          .form-slab { border-top-right-radius: 0; border-bottom-right-radius: 0; }
          .image-col img { border-top-right-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 0; border-bottom-left-radius: 0; }
        }
        @media (max-width: 899px) {
          .image-col img { border-radius: 20px; }
        }
        .form__control label { font-weight: 600; color: #0d141a; }
        .form__control input, .form__control textarea {
          transition: box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          outline: none;
        }
        .form__control input:focus, .form__control textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.2);
          background-color: #eef2ff;
        }
        .form__control button {
          transition: transform 0.05s ease, background-color 0.2s ease, box-shadow 0.2s ease;
          background-color: #2563eb;
        }
        .form__control button:hover { background-color: #1d4ed8; }
        .form__control button:active { transform: translateY(1px); }
        .form__control button:disabled { opacity: 0.7; cursor: not-allowed; }
      `}</style>
    </div>
  );
}
