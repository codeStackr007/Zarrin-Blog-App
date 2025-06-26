import React, { useState } from "react";
import { NewsletterProvider } from "../components/NewsletterContext";
import NewsletterForm from "../components/NewsletterForm";

const Toaster = ({ show, message, type = "success", onClose }) => (
  <div
    className={`fixed z-50 transition-all duration-500
      ${
        show
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95 pointer-events-none"
      }
      bottom-8 right-8 sm:left-1/2 sm:right-auto sm:bottom-8 sm:translate-x-[-50%] sm:w-[90vw] sm:max-w-xs
    `}
    style={{
      left: window.innerWidth <= 640 ? "50%" : "auto",
      right: window.innerWidth > 640 ? "2rem" : "auto",
      transform:
        window.innerWidth <= 640
          ? "translateX(-50%)"
          : show
          ? "scale(1)"
          : "scale(0.95)",
      maxWidth: "22rem",
      width: "100%",
      transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
    }}
    onAnimationEnd={show ? undefined : onClose}
  >
    <div
      className={`px-6 py-3 rounded-xl shadow-2xl font-semibold text-base flex items-center gap-2 animate-slide-in-out
      ${
        type === "danger" ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`}
      style={{ justifyContent: "center" }}
    >
      {type === "danger" ? (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
      {message}
    </div>
  </div>
);

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  // Validation for my contact page:
  const validateEmail = (email) => /.+@.+\..+/.test(email);
  const validatePhone = (phone) =>
    /^\+?\d{7,15}$/.test(phone.replace(/\s/g, ""));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) errors.email = "Email is required";
    else if (!validateEmail(form.email)) errors.email = "Invalid email";
    if (!form.phone) errors.phone = "Phone is required";
    else if (!validatePhone(form.phone)) errors.phone = "Invalid phone";
    if (!form.subject) errors.subject = "Subject is required";
    if (!form.message) errors.message = "Message is required";
    setFormError(errors);
    if (Object.keys(errors).length === 0) {
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setFormSuccess(true);
      setTimeout(() => setFormSuccess(false), 3000);
    }
  };

  return (
    <NewsletterProvider>
      <main className="min-h-screen bg-[#fafafd] w-full">
        {/* Title & Subtitle */}
        <section className="max-w-7xl mx-auto w-full pt-16 pb-8 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
            Get in Touch
          </h1>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-10 text-base sm:text-lg">
            Contact us to publish your content and show ads to our website and
            get a good reach.
          </p>
          {/* Info Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            {/* Office */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow-md p-8 min-w-[220px]">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#7f56d9] mb-4">
                <img
                  src={require("../assets/images/Home.svg").default}
                  alt="Office"
                  className="w-7 h-7"
                />
              </div>
              <div className="font-bold text-gray-900 mb-1">Office</div>
              <div className="text-gray-500 text-sm text-center">
                Victoria Street, London, UK
              </div>
            </div>
            {/* Email */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow-md p-8 min-w-[220px]">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#7f56d9] mb-4">
                <img
                  src={require("../assets/images/Email-Icon.svg").default}
                  alt="Email"
                  className="w-7 h-7"
                />
              </div>
              <div className="font-bold text-gray-900 mb-1">Email</div>
              <div className="text-gray-500 text-sm text-center">
                hello@zarrin.com
              </div>
            </div>
            {/* Phone */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow-md p-8 min-w-[220px]">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#7f56d9] mb-4">
                <img
                  src={require("../assets/images/Phone-Icon.svg").default}
                  alt="Phone"
                  className="w-7 h-7"
                />
              </div>
              <div className="font-bold text-gray-900 mb-1">Phone</div>
              <div className="text-gray-500 text-sm text-center">
                (800) 234 3456
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="w-full max-w-7xl mx-auto mb-0">
          <div className="w-full h-96 md:h-[32rem] rounded-2xl overflow-hidden relative">
            <img
              src={require("../assets/images/Rectangle 1086.svg").default}
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full max-w-3xl mx-auto -mt-24 mb-20 z-10 relative">
          <form
            onSubmit={handleFormSubmit}
            noValidate
            className="bg-white rounded-3xl shadow-lg p-8 md:p-14 w-full min-h-[600px] flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7f56d9] transition-all duration-200 text-black ${
                    formError.name ? "border-red-400" : "border-gray-200"
                  }`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {formError.name && (
                  <p className="text-red-500 text-xs mt-1">{formError.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7f56d9] transition-all duration-200 text-black ${
                    formError.email ? "border-red-400" : "border-gray-200"
                  }`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {formError.email && (
                  <p className="text-red-500 text-xs mt-1">{formError.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7f56d9] transition-all duration-200 text-black ${
                    formError.phone ? "border-red-400" : "border-gray-200"
                  }`}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {formError.phone && (
                  <p className="text-red-500 text-xs mt-1">{formError.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7f56d9] transition-all duration-200 text-black ${
                    formError.subject ? "border-red-400" : "border-gray-200"
                  }`}
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
                {formError.subject && (
                  <p className="text-red-500 text-xs mt-1">
                    {formError.subject}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7f56d9] transition-all duration-200 text-black ${
                  formError.message ? "border-red-400" : "border-gray-200"
                }`}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {formError.message && (
                <p className="text-red-500 text-xs mt-1">{formError.message}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#7f56d9] hover:bg-[#6c3fd7] text-white font-semibold rounded-md px-8 py-2 transition-colors duration-200 shadow-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Toaster for contact form */}
        <Toaster
          show={formSuccess}
          message="Message sent successfully!"
          onClose={() => setFormSuccess(false)}
        />

        {/* Newsletter Section */}
        <section className="relative bg-primary-600 w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden mt-16">
          <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto">
            <h2
              className="text-white font-bold text-center mb-8"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Get our stories delivered
              <br />
              to your inbox weekly.
            </h2>
            <NewsletterForm />
            <p className="text-primary-100 text-center text-xs sm:text-sm max-w-lg">
              Get a response tomorrow if you submit by 9pm today. If we received
              after 9pm will get a reponse the following day.
            </p>
          </div>
        </section>
      </main>
    </NewsletterProvider>
  );
};

export default ContactPage;
